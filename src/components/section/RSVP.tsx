"use client";

import {
  useCallback,
  useEffect,
  useState,
} from "react";

import Image from "next/image";
import toast from "react-hot-toast";

import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

type Wish = {
  guestId: string;
  name: string;
  attendance: string;
  message: string;
};

type AttendanceStatus =
  | "Hadir"
  | "Tidak Hadir"
  | "Masih Ragu";

type Props = {
  guestId: string;
  guestName: string;
};

const ATTENDANCE_STYLES: Record<
  AttendanceStatus,
  string
> = {
  Hadir:
    "bg-green-700 border-green-700 hover:border-green-500",

  "Tidak Hadir":
    "bg-red-700 border-red-700 hover:border-red-500",

  "Masih Ragu":
    "bg-yellow-600 border-yellow-600 hover:border-yellow-500 text-black",
};

const INACTIVE_STYLE =
  "bg-zinc-900 border-zinc-700";

export default function RSVP({
  guestId,
  guestName,
}: Props) {
  const API =
    "/api/rsvp";

  const [name, setName] =
    useState(guestName);

  const [attendance, setAttendance] =
    useState<AttendanceStatus>(
      "Hadir"
    );

  const [message, setMessage] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [loadingWishes, setLoadingWishes] =
    useState(false);

  const [isPageChanging, setIsPageChanging] =
    useState(false);

  const [loadingText, setLoadingText] =
    useState("Mengambil ucapan & doa terbaik🥰");

  const [wishes, setWishes] =
    useState<Wish[]>([]);

  const [page, setPage] =
    useState(1);
    
  const [totalPages, setTotalPages] =
    useState(1);

  const [hasSubmitted, setHasSubmitted] =
    useState(false);

  const [originalName, setOriginalName] =
    useState("");

  const [originalAttendance, setOriginalAttendance] =
    useState<AttendanceStatus>("Hadir");

  const [originalMessage, setOriginalMessage] =
    useState("");

  const loadGuest =
    useCallback(async () => {

      if (!guestId) return;

      try {

        const res =
          await fetch(
            `${API}?guest=${guestId}`
          );

        const guest =
          await res.json();

        if (guest?.rsvp) {

          setHasSubmitted(true);

          if (guest.rsvp.name) {

            setName(
              guest.rsvp.name
            );

            setOriginalName(
              guest.rsvp.name
            );

          }

          setOriginalAttendance(
            guest.rsvp.attendance
          );

          setOriginalMessage(
            guest.rsvp.message || ""
          );

          setAttendance(
            guest.rsvp.attendance
          );

          setMessage(
            guest.rsvp.message || ""
          );

        }

      } catch (error) {

        console.error(error);

      }

    }, [
      API,
      guestId,
    ]);

  const loadWishes = useCallback(
    async () => {
      setLoadingWishes(true);

      setLoadingText(
        "Mengambil ucapan & doa terbaik🥰"
      );

      //consolelog
      const startLoad =
      performance.now();

      try {
        const res =
          await fetch(
          `${API}?page=${page}`,
          {
            cache: "no-store",
          }
        );

        const data =
          await res.json();

        setWishes(data.data);

        setTotalPages(
          data.totalPages
        );

        //consloelog
        console.log(
          "LOAD WISHES:",
          Math.round(
            performance.now() - startLoad
          ),
          "ms"
        );
      } catch (error) {
        console.error(error);
      } finally {
        setLoadingWishes(false);
        setIsPageChanging(false);
      }
    },
    [
      API,
      page,
    ]
  );

  useEffect(() => {
    loadGuest();
  }, [loadGuest]);

  useEffect(() => {
    loadWishes();
  }, [loadWishes]);

  useEffect(() => {

  if (!loadingWishes) return;

  const texts = [
    "Mengambil ucapan & doa terbaik🥰",
    "Mengambil ucapan & doa terbaik.🥰",
    "Mengambil ucapan & doa terbaik..🥰",
    "Mengambil ucapan & doa terbaik...🥰",
  ];

  let index = 0;

  const interval = setInterval(() => {

    index =
      (index + 1) %
      texts.length;

    setLoadingText(
      texts[index]
    );

  }, 350);

  return () =>
    clearInterval(interval);

}, [loadingWishes]);

  const submitRSVP = async () => {
    if (!name.trim()) {
      toast.error(
        "Nama belum terisi"
      );
      return;
    }

    if (
      !hasSubmitted &&
      !message.trim()
    ) {
      toast.error(
        "Ucapan & Doa belum terisi"
      );
      return;
    }

    if (
      hasSubmitted &&
      name.trim() === originalName.trim() &&
      attendance === originalAttendance &&
      message.trim() === originalMessage.trim()
    ) {

      toast(
        "Tidak ada data yang diubah"
      );

      return;

    }

    const cleanedMessage =
      message
        .replace(
          /\n{3,}/g,
          "\n\n"
        )
        .trim();

    setLoading(true);

    try {

      const res = await fetch(API, {
        method: "POST",
        body: JSON.stringify({
          guestId,
          name,
          attendance,
          message:
            cleanedMessage,
        }),
      });

      const result =
        await res.json();

      if (!res.ok) {
        throw new Error(
          result.error
        );
      }

      toast.success(
        hasSubmitted
          ? "RSVP berhasil diperbarui ❤️"
          : "Terima kasih atas konfirmasinya ❤️"
      );

      setHasSubmitted(true);

      setOriginalName(
        name
      );

      setOriginalAttendance(
        attendance
      );

      setOriginalMessage(
        message
      );

      setPage(1);

      loadWishes();

    } catch (error) {

      if (
        error instanceof Error &&
        error.message === "Guest not found"
      ) {

        toast.error(
          "ID/URL Undangan tidak valid"
        );

      } else {

        toast.error(
          "Gagal mengirim RSVP"
        );

      }

    } finally {

      setLoading(false);

    }
  };

  const getStatusIcon = (
    status: string
  ) => {
    if (status === "Hadir") {
      return (
        <CheckCircle2
          size={18}
          className="text-green-500"
        />
      );
    }

    if (
      status ===
      "Tidak Hadir"
    ) {
      return (
        <XCircle
          size={18}
          className="text-red-500"
        />
      );
    }

    return (
      <HelpCircle
        size={18}
        className="text-yellow-500"
      />
    );
  };

  const avatars = [
      "/images/usernet/net1.png",
      "/images/usernet/net2.png",
      "/images/usernet/net3.png",
      "/images/usernet/net4.png",
      "/images/usernet/net5.png",
    ];

    const getAvatar = (name: string) => {
    const hash = [...name].reduce(
        (acc, char) => acc + char.charCodeAt(0),
        0
      );

      return avatars[hash % avatars.length];
    };

  return (
    <section id="rsvp" className="py-24 px-6">

      <div className="w-24 h-1 bg-red-600 mx-auto mb-6 rounded-full" />

      <h2 className="text-4xl font-bold text-center mb-12">
        RSVP & Ucapan
      </h2>

      <p className="text-center mb-12"> Berikan ucapan harapan dan doa kepada kami❤️</p>

      <div className="grid lg:grid-cols-2 gap-10 max-w-7xl mx-auto">

        {/* FORM */}

        <div className="bg-[#141414] border border-red-900/30 rounded-2xl p-8">

          <h3 className="text-2xl font-bold mb-0.5">
            Konfirmasi Kehadiran
          </h3>

          <p className="text-gray-400 mb-5">
              <i>Dapat diupdate di kemudian hari dengan link/url yang diberikan.</i>
          </p>

          <input
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
            placeholder="Nama"
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3 mb-5"
          />

          <div className="mb-5">

            <p className="text-gray-400 mb-3">
              Pilih Status Kehadiran
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">

              {(
                Object.keys(
                  ATTENDANCE_STYLES
                ) as AttendanceStatus[]
              ).map(
                (status) => (
                  <button
                    key={status}
                    type="button"
                    onClick={() =>
                      setAttendance(
                        status
                      )
                    }
                    className={`py-3 rounded-xl border font-semibold transition ${
                      attendance ===
                      status
                        ? ATTENDANCE_STYLES[
                            status
                          ]
                        : INACTIVE_STYLE
                    }`}
                  >
                    {status}
                  </button>
                )
              )}

            </div>

          </div>

          <textarea
            rows={5}
            value={message}
            maxLength={225}
            onChange={(e) =>
              setMessage(
                e.target.value
              )
            }
            placeholder="Tulis ucapan dan doa terbaik..."
            className="w-full bg-zinc-900 border border-zinc-700 rounded-xl px-4 py-3"
          />

          <p className="text-right text-sm text-gray-500 mt-2">
            {message.length}/225
          </p>

          <button
            disabled={loading}
            onClick={submitRSVP}
            className="mt-5 bg-red-600 hover:bg-red-700 disabled:opacity-50 px-6 py-3 rounded-xl font-bold transition"
          >
            {loading
              ? "Mengirim..."
              : hasSubmitted
              ? "Update RSVP"
              : "Kirim RSVP"}
          </button>

        </div>

        {/* UCAPAN */}

        <div className="bg-[#141414] border border-red-900/30 rounded-2xl p-8 h-[700px] flex flex-col">

          <h3 className="text-2xl font-bold mb-6">
            Ucapan & Doa
          </h3>

          <div className="flex-1 overflow-y-auto pr-2">

            {loadingWishes && isPageChanging ? (

              <div className="py-10 text-center text-gray-400">
                {loadingText}
              </div>

            ) : (

              <div className="space-y-5">

                {wishes.map(
                  (wish, index) => (
                    <div
                      key={index}
                      className="flex gap-4 border-b border-zinc-800 pb-5"
                    >

                      <div className="w-8 h-8 flex-shrink-0 relative">
                        <Image
                          src={getAvatar(wish.name)}
                          alt={wish.name}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>

                      <div className="flex-1">

                        <div className="flex items-center gap-2 mb-2">

                          <h4 className="font-bold text-lg">
                            {wish.name}
                          </h4>

                          {getStatusIcon(
                            wish.attendance
                          )}

                        </div>

                        <p className="text-gray-300 whitespace-pre-wrap">
                          {wish.message}
                        </p>

                      </div>

                    </div>
                  )
                )}

              </div>

            )}

          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-8">

              <button
                disabled={
                  page === 1
                }
                onClick={() => {
                  setIsPageChanging(true);
                  setPage(
                    page - 1
                  );
                }}
                className="bg-zinc-800 p-2 rounded-lg disabled:opacity-30"
              >
                <ChevronLeft />
              </button>

              <span>
                {page} /{" "}
                {totalPages}
              </span>

              <button
                disabled={
                  page ===
                  totalPages
                }
                onClick={() => {
                  setIsPageChanging(true);
                  setPage(
                    page + 1
                  );
                }}
                className="bg-zinc-800 p-2 rounded-lg disabled:opacity-30"
              >
                <ChevronRight />
              </button>

            </div>
          )}

        </div>

      </div>

    </section>
  );
}