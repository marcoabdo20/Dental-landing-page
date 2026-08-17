'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function TermsModal({ open, onClose }) {
    const { t } = useLanguage();
    const dialogRef = useRef(null);
    const terms = t.footer.terms;

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    const handleDialogClick = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            id="terms-modal"
            aria-labelledby="terms-modal-title"
            onClose={onClose}
            onClick={handleDialogClick}
            onCancel={(e) => {
                e.preventDefault();
                onClose();
            }}
            className="
        w-[calc(100vw-32px)]
        max-w-[760px]
        max-h-[80vh]
        overflow-visible
        rounded-[24px]
        border-0
        bg-transparent
        p-0

        backdrop:bg-[rgba(26,43,75,0.42)]
        backdrop:backdrop-blur-[14px]
        backdrop:backdrop-saturate-[120%]

        motion-safe:animate-[modal-in_260ms_ease-out]
      "
        >
            <div
                className="
          flex
          max-h-[80vh]
          flex-col
          overflow-hidden

          rounded-[24px]

          border
          border-white/85

          bg-white/[0.72]

          shadow-[0_20px_60px_rgba(26,43,75,0.18),inset_0_1px_0_rgba(255,255,255,0.75)]

          backdrop-blur-[34px]
          backdrop-saturate-[180%]
        "
            >
                {/* Header */}
                <div
                    className="
            flex
            flex-none
            items-start
            justify-between
            gap-4

            border-b
            border-white/65

            bg-white/[0.34]

            px-6
            pb-4
            pt-6

            backdrop-blur-xl
          "
                >
                    <h2
                        id="terms-modal-title"
                        className="
              m-0
              font-serif
              text-[22px]
              font-semibold
              leading-[1.35]
              tracking-tight
              text-[#26364F]
            "
                    >
                        {terms.modalTitle}
                    </h2>

                    <button
                        type="button"
                        aria-label={terms.closeAria}
                        onClick={onClose}
                        className="
              grid
              h-[38px]
              w-[38px]
              shrink-0
              place-items-center

              rounded-full

              border
              border-[#DDE3EF]

              bg-white/75

              text-[#66758F]

              shadow-[0_2px_8px_rgba(26,43,75,0.06)]

              transition-all
              duration-200
              ease-out

              hover:-translate-y-px
              hover:bg-white
              hover:text-[#2580C4]

              focus:outline-none
              focus:ring-2
              focus:ring-[#2580C4]/40
            "
                    >
                        <svg class="icon icon-sm" aria-hidden="true"><use href="#i-close" /></svg>

                    </button>
                </div>

                {/* Body */}
                <div
                    className="
            min-h-0
            flex-1
            overflow-y-auto

            overscroll-contain

            px-6
            py-6

            [scrollbar-width:thin]
            [scrollbar-color:#CBD5E1_transparent]

            sm:px-7
            sm:py-7
          "
                >
                    {/* Arabic language note */}
                    <div
                        className="
              mb-5
              hidden

              rounded-xl

              border
              border-[#E2E7F0]

              bg-white/55

              px-4
              py-3

              text-right
              text-sm
              leading-7
              text-[#52627A]

              [dir='rtl']:block
            "
                    >
                        {terms.modalTitle}
                    </div>

                    <div className="space-y-4">
                        {terms.sections.map((section, sIdx) => (
                            <section key={sIdx}>
                                {/* Section Heading */}
                                <h3
                                    className="
                    mt-8
                    mb-2

                    font-serif
                    text-xl
                    font-semibold
                    leading-[1.35]

                    text-[#26364F]

                    first:mt-0
                  "
                                >
                                    {section.heading}
                                </h3>

                                <div className="space-y-2">
                                    {section.blocks.map((block, bIdx) => {
                                        if (block.type === 'p') {
                                            return (
                                                <p
                                                    key={bIdx}
                                                    className="
                            text-[15.5px]
                            leading-[1.7]
                            text-[#52627A]
                          "
                                                >
                                                    {block.text}
                                                </p>
                                            );
                                        }

                                        if (block.type === 'h4') {
                                            return (
                                                <h4
                                                    key={bIdx}
                                                    className="
                            mt-5
                            text-[15px]
                            font-semibold
                            leading-[1.5]
                            text-[#26364F]
                          "
                                                >
                                                    {block.text}
                                                </h4>
                                            );
                                        }

                                        if (block.type === 'ul') {
                                            return (
                                                <ul
                                                    key={bIdx}
                                                    className="
                            grid
                            list-disc
                            gap-2
                            pl-[1.15em]

                            text-[15.5px]
                            leading-[1.7]

                            marker:text-[#9AA8BE]
                          "
                                                >
                                                    {block.items.map((item, iIdx) => (
                                                        <li
                                                            key={iIdx}
                                                            className="
                                pl-1
                                text-[#52627A]
                              "
                                                        >
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            );
                                        }

                                        return null;
                                    })}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Version */}
                    <p
                        className="
              mt-8

              border-t
              border-[#E2E6EE]

              pt-4

              text-[13px]
              tracking-[0.04em]
              text-[#8491A5]
            "
                    >
                        {terms.version}
                    </p>
                </div>
            </div>
        </dialog>
    );
}