'use client';

import { useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

/**
 * Terms & Conditions modal.
 * Controlled component: pass `open` + `onClose` from the parent (Footer).
 * Content comes entirely from translations.js -> t.footer.terms, so it
 * switches language automatically with the rest of the site.
 */
export default function TermsModal({ open, onClose }) {
    const { t } = useLanguage();
    const dialogRef = useRef(null);
    const terms = t.footer.terms;

    // keep the native <dialog> element in sync with the `open` prop
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (open && !dialog.open) {
            dialog.showModal();
        } else if (!open && dialog.open) {
            dialog.close();
        }
    }, [open]);

    // close on backdrop click (click landing on the <dialog> itself, not the card)
    const handleDialogClick = (e) => {
        if (e.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog
            ref={dialogRef}
            className="
        w-[calc(100vw-24px)]
        max-w-[760px]
        max-h-[80vh]

        overflow-hidden
        rounded-[28px]

        border-0
        bg-transparent
        p-0

        shadow-[0_25px_70px_rgba(32,55,90,0.25)]

        backdrop:bg-[rgba(45,67,105,0.48)]
        backdrop:backdrop-blur-[14px]
        backdrop:backdrop-saturate-[120%]

        sm:w-[calc(100vw-40px)]
      "
            id="terms-modal"
            aria-labelledby="terms-modal-title"
            onClose={onClose}
            onClick={handleDialogClick}
            onCancel={(e) => {
                // native ESC handling - let it close, then sync React state
                e.preventDefault();
                onClose();
            }}
        >
            <div
                className="
          flex
          max-h-[80vh]
          flex-col
          overflow-hidden

          rounded-[28px]

          border
          border-white/80

          bg-[rgba(245,247,253,0.94)]

          shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]

          backdrop-blur-[30px]
        "
            >
                {/* =========================
            Modal Header
        ========================== */}
                <div
                    className="
            flex
            flex-none
            items-center
            justify-between
            gap-4

            border-b
            border-white/80

            bg-[rgba(255,255,255,0.45)]

            px-5
            py-5

            sm:px-6
            sm:py-5
          "
                >
                    <h2
                        className="
              m-0

              font-serif
              text-[30px]
              font-semibold
              leading-tight
              tracking-[-0.02em]

              text-[#243858]

              sm:text-[38px]
            "
                        id="terms-modal-title"
                    >
                        {terms.modalTitle}
                    </h2>

                    <button
                        type="button"
                        className="
              grid
              h-[38px]
              w-[38px]
              shrink-0
              place-items-center

              rounded-full

              border
              border-white

              bg-white/75

              text-[#7B8DA8]

              shadow-[0_2px_8px_rgba(36,56,88,0.06)]

              transition-all
              duration-200
              ease-out

              hover:-translate-y-[1px]
              hover:bg-white
              hover:text-[#2580C4]
              hover:shadow-[0_4px_12px_rgba(36,56,88,0.12)]

              active:scale-95

              focus:outline-none
              focus:ring-2
              focus:ring-[#2580C4]/30
            "
                        data-modal-close
                        aria-label={terms.closeAria}
                        onClick={onClose}
                    >
                        <svg className="icon icon-sm" aria-hidden="true"><use href="#i-close" /></svg>

                    </button>
                </div>

                {/* =========================
            Modal Body
        ========================== */}
                <div
                    className="
            terms

            min-h-0
            flex-1
            overflow-y-auto

            overscroll-contain

            px-5
            py-7

            sm:px-6
            sm:py-8

            [scrollbar-width:thin]
            [scrollbar-color:#9BA8BC_transparent]
          "
                >
                    {terms.sections.map((section, sIdx) => (
                        <div
                            key={sIdx}
                            className="mb-8 last:mb-2"
                        >
                            {/* Section Heading */}
                            <h3
                                className="
                  mb-2

                  font-serif
                  text-[18px]
                  font-semibold
                  leading-[1.4]

                  text-[#243858]

                  sm:text-[20px]
                "
                            >
                                {section.heading}
                            </h3>

                            {section.blocks.map((block, bIdx) => {
                                if (block.type === 'p') {
                                    return (
                                        <p
                                            key={bIdx}
                                            className="
                        mb-3
                        text-[15px]
                        leading-[1.7]

                        text-[#5C708F]

                        sm:text-[15.5px]
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
                        mb-1
                        mt-5

                        text-[15px]
                        font-semibold
                        leading-[1.5]

                        text-[#334A6C]
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
                        mb-4

                        grid
                        list-disc
                        gap-2

                        pl-[1.15em]

                        text-[15px]
                        leading-[1.7]

                        marker:text-[#8D9DB5]
                      "
                                        >
                                            {block.items.map((item, iIdx) => (
                                                <li
                                                    key={iIdx}
                                                    className="
                            pl-1
                            text-[#5C708F]
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
                    ))}

                    {/* Version */}
                    <p
                        className="
              terms-version

              mt-8

              border-t
              border-[#DCE2EC]

              pt-4

              text-center
              text-[13px]
              tracking-[0.04em]

              text-[#8A98AD]
            "
                    >
                        {terms.version}
                    </p>
                </div>
            </div>
        </dialog>
    );
}