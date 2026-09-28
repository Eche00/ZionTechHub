import { AccountBalance, Analytics, Android, ArrowBack, ArrowForward, LocalHospital } from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';

function Tracks({ tracks,
    trackDetails,
    activeTab,
    setActiveTab,
    setStep }) {
    return (
        <div>
            {/* Dotted Background */}
            <div
                className="pointer-events-none absolute inset-0 opacity-50"
                style={{
                    backgroundImage:
                        "radial-gradient(#CBD5E1 0.8px, transparent 0.8px)",
                    backgroundSize: "9px 9px",
                }}
            />
            <section className="mx-auto w-full max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
                <div className='w-full flex items-center justify-center'>
                    <div className="mb-3 inline-flex items-center rounded-full border border-[#DCE8FF] bg-[#F5F8FF] px-3 py-1.5">
                        <span className="mr-2 h-1.5 w-1.5 rounded-full bg-[#034FE3]" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.08em] text-[#034FE3]">
                            Step 1 of 2
                        </span>
                    </div>
                </div>
                {/* HEADER */}
                <div className="mb-6 flex items-center justify-center gap-2">

                    <button
                        type="button"
                        onClick={() => setStep((prev) => prev - 1)}
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E4E7EC] bg-white text-[#344054] transition hover:border-[#034FE3] hover:text-[#034FE3]"
                    >
                        <ArrowBack fontSize="small" />
                    </button>

                    <div className="text-center">
                        <h2 className="text-[20px] font-bold tracking-[-0.02em] text-[#101828] sm:text-[26px]">
                            Step 1: Choose Your Specialization Track
                        </h2>

                        <p className="mt-1 text-[11px] text-[#667085] sm:text-[13px]">
                            Select the career track you want to build your skills in.
                            You can explore the full track details before continuing.
                        </p>
                    </div>

                </div>


                {/* TRACK CARDS */}
                <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:grid-cols-4">

                    {tracks.map((track) => {
                        const isSelected = activeTab === track.name;
                        const details = trackDetails[track.name];

                        const trackIcon =
                            track.name === "healthcare data analytics"
                                ? <LocalHospital fontSize="small" />
                                : track.name === "financial data analytics"
                                    ? <AccountBalance fontSize="small" />
                                    : track.name === "data-analytics"
                                        ? <Analytics fontSize="small" />
                                        : <Android fontSize="small" />;

                        return (
                            <div
                                key={track.id}
                                onClick={() => setActiveTab(track.name)}
                                className={`
                                    group relative flex min-h-[290px] cursor-pointer flex-col
                                    rounded-[18px] border bg-white p-5
                                    transition-all duration-200
                                    ${isSelected
                                        ? "border-[#034FE3] shadow-[0_8px_30px_rgba(3,79,227,0.10)]"
                                        : "border-[#E4E7EC] shadow-sm hover:-translate-y-0.5 hover:border-[#B8C7E8] hover:shadow-md"
                                    }
                                `}
                            >

                                {/* SELECTED INDICATOR */}
                                <div className="absolute right-4 top-4">
                                    {isSelected ? (
                                        <div className="flex items-center gap-1.5 rounded-full bg-[#EEF4FF] px-2 py-1">
                                            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-[#034FE3]">
                                                <svg
                                                    width="8"
                                                    height="8"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                >
                                                    <path
                                                        d="M5 12.5L10 17L19 7"
                                                        stroke="white"
                                                        strokeWidth="3"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    />
                                                </svg>
                                            </span>

                                            <span className="text-[9px] font-semibold text-[#034FE3]">
                                                Selected
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="block h-5 w-5 rounded-full border-2 border-[#D0D5DD] transition group-hover:border-[#034FE3]" />
                                    )}
                                </div>


                                {/* ICON */}
                                <div
                                    className={`
                                        flex h-11 w-11 items-center justify-center
                                        rounded-[12px] transition-colors
                                        ${isSelected
                                            ? "bg-[#034FE3] text-white"
                                            : "bg-[#EEF4FF] text-[#034FE3] group-hover:bg-[#E2ECFF]"
                                        }
                                    `}
                                >
                                    {trackIcon}
                                </div>


                                {/* TRACK NAME */}
                                <div className=" pr-8">
                                    <h3 className="mt-1 text-[17px] font-bold leading-[1.25] tracking-[-0.02em] text-[#101828]">
                                        {details?.title ||
                                            track.name
                                                .replaceAll("-", " ")
                                                .replace(/\b\w/g, (char) =>
                                                    char.toUpperCase()
                                                )}
                                    </h3>
                                </div>


                                {/* SHORT DESCRIPTION */}
                                <p className="mt-3 line-clamp-3 text-[11px] leading-[1.6] text-[#667085]">
                                    {details?.description ||
                                        "Build practical, industry-focused skills through guided training and hands-on projects."}
                                </p>


                                {/* META */}
                                <div className="mt-4 flex flex-wrap items-center gap-2">
                                    {details?.category && (
                                        <span className="rounded-full bg-[#F5F7FA] px-2.5 py-1 text-[9px] font-medium text-[#667085]">
                                            {details.category}
                                        </span>
                                    )}

                                    {details?.duration && (
                                        <span className="rounded-full bg-[#F5F7FA] px-2.5 py-1 text-[9px] font-medium text-[#667085]">
                                            {details.duration}
                                        </span>
                                    )}
                                </div>


                                {/* SPACER */}
                                <div className="flex-1 " />
                                {/* read more / continue */}
                                <div className='flex gap-4 items-center justify-center'>

                                    <Link to={`/${encodeURIComponent(track.name).replace(/%20/g, '-')}`} onClick={(e) => e.stopPropagation()}
                                        className="
                                        mt-5 flex h-9 w-full items-center justify-center
                                        gap-1.5 rounded-lg border border-[#D0D5DD]
                                        bg-white text-[10px] font-semibold
                                        text-[#034FE3]
                                        transition-all duration-200
                                        hover:border-[#034FE3]
                                        hover:bg-[#F5F8FF] z-40
                                    ">
                                        Read More

                                    </Link>

                                    <button
                                        type="button"
                                        onClick={() => setStep((prev) => prev + 1)}
                                        disabled={!activeTab}

                                        className="
                                        mt-5 flex h-9 w-full items-center justify-center
                                        gap-1.5 rounded-lg border border-[#F5F8FF]
                                        bg-[#034FE3] text-[10px] font-semibold
                                        text-white
                                        transition-all duration-200
                                        hover:bg-[#023DB0]cn.bck  nxmn inmlxx we should add  fhdnxljj
                                         z-40
                                    "
                                    >
                                        Continue

                                        <svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            className="ml-2"
                                        >
                                            <path
                                                d="M5 12H19M13 6L19 12L13 18"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>


                {/* SELECTED TRACK SUMMARY */}
                {activeTab && (
                    <div className="mt-5 flex flex-col gap-3 rounded-[14px] border border-[#DCE8FF] bg-[#F5F8FF] px-4 py-3 sm:flex-row sm:items-center sm:justify-between">

                        <div className="flex items-center gap-2.5">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#034FE3] text-white">
                                <svg
                                    width="11"
                                    height="11"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                >
                                    <path
                                        d="M5 12.5L10 17L19 7"
                                        stroke="currentColor"
                                        strokeWidth="2.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </span>

                            <div>
                                <p className="text-[9px] uppercase tracking-[0.08em] text-[#98A2B3]">
                                    Selected specialization
                                </p>

                                <p className="text-[12px] font-bold text-[#101828]">
                                    {trackDetails[activeTab]?.title ||
                                        activeTab.replaceAll("-", " ")}
                                </p>
                            </div>
                        </div>

                        <span className="text-[10px] text-[#667085]">
                            Ready to choose your learning package
                        </span>
                    </div>
                )}


                {/* ACTIONS */}
                <div className="mt-6 flex flex-col-reverse gap-2.5 sm:flex-row sm:justify-end">

                    <button
                        type="button"
                        onClick={() => setStep((prev) => prev - 1)}
                        className="
                            flex h-11 w-full items-center justify-center
                            rounded-lg border border-[#D0D5DD]
                            bg-white px-7 text-[12px] font-semibold
                            text-[#344054]
                            transition-all duration-200
                            hover:border-[#B8C7E8]
                            hover:bg-[#F9FAFB]
                            sm:w-auto
                        "
                    >
                        Back
                    </button>

                    <button
                        type="button"
                        onClick={() => setStep((prev) => prev + 1)}
                        disabled={!activeTab}
                        className="
                            flex h-11 w-full items-center justify-center
                            rounded-lg bg-[#034FE3]
                            px-8 text-[12px] font-semibold text-white
                            shadow-[0_6px_20px_rgba(3,79,227,0.16)]
                            transition-all duration-200
                            hover:bg-[#023DB0]
                            disabled:cursor-not-allowed
                            disabled:bg-[#B8C7E8]
                            disabled:shadow-none
                            sm:w-auto
                        "
                    >
                        Continue

                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 24 24"
                            fill="none"
                            className="ml-2"
                        >
                            <path
                                d="M5 12H19M13 6L19 12L13 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </button>

                </div>

            </section>
        </div>
    )
}

export default Tracks