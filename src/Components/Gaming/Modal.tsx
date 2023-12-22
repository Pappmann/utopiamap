import * as React from "react"

export function Modal({children}) {


    return (
        <>

            {/* You can open the modal using ID.showModal() method */}
            <dialog id="my_modal_3" className="tw-modal tw-transition-all tw-duration-300 tw-mt-2 tw-mb-2 tw-h-[calc(100%-1rem)]">
                <form method="dialog" className="tw-modal-box tw-transition-none">
                    <button className="tw-btn tw-btn-sm tw-btn-circle tw-btn-ghost tw-absolute tw-right-2 tw-top-2">✕</button>
                    {children}
                </form>
                <form method="dialog" className="tw-modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </>
    )
}

