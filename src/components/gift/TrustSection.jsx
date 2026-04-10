export default function TrustSection() {
  return (
    <div className="bg-linear-to-b from-white to-gray-800 py-5 text-center grid grid-cols-3 gap-6 text-white">
      <div className="flex md:flex-col items-center gap-2 justify-center">
        <svg className="text-black" xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"><path strokeLinejoin="round" strokeMiterlimit="1.5" d="M8 19a2 2 0 1 0 0-4a2 2 0 0 0 0 4m10 0a2 2 0 1 0 0-4a2 2 0 0 0 0 4"/><path d="M10.05 17H15V6.6a.6.6 0 0 0-.6-.6H1m4.65 11H3.6a.6.6 0 0 1-.6-.6v-4.9"/><path strokeLinejoin="round" d="M2 9h4"/><path d="M15 9h5.61a.6.6 0 0 1 .548.356l1.79 4.028a.6.6 0 0 1 .052.243V16.4a.6.6 0 0 1-.6.6h-1.9M15 17h1"/></g></svg>
        <span className="hidden md:inline-block">Free Delivery</span>
      </div>
      <div className="flex md:flex-col items-center gap-2 justify-center">
        <svg className="text-black" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" /><path fill="currentColor" d="M21.66 9.412c1.428 5.334-1.737 10.818-7.072 12.247c-4.598 1.232-9.304-.95-11.433-4.99a1 1 0 0 1 1.77-.932a8 8 0 1 0-.452-6.449l1.057-.235c1.186-.265 1.862 1.306.854 1.985L3.711 12.84c-.718.483-1.72-.016-1.713-.918a10 10 0 0 1 7.414-9.58C14.746.91 20.23 4.076 21.659 9.41M12 6a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-5a.5.5 0 0 0 0 1h4a2.5 2.5 0 0 1 0 5h-1v1a1 1 0 1 1-2 0v-1H9a1 1 0 1 1 0-2h5a.5.5 0 0 0 0-1h-4a2.5 2.5 0 0 1 0-5h1V7a1 1 0 0 1 1-1" /></g></svg>
        <span className="hidden md:inline-block">Easy Returns</span>
      </div>
      <div className="flex md:flex-col items-center gap-2 justify-center">
        <svg className="text-black" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 32 32"><path fill="currentColor" d="M9 4v3.234L5.516 5.143L4.484 6.857L6.39 8H3v19h6v-2H5V10h8.027c.833-.62 1.857-1 2.973-1c.352 0 .682.042 1 .102V8h-3.389l1.905-1.143l-1.032-1.714L11 7.234V4zm7 7c-1.645 0-3 1.355-3 3c0 .352.075.684.188 1H11v12h18V15h-2.188A2.9 2.9 0 0 0 27 14c0-1.645-1.355-3-3-3c-1.75 0-2.938 1.328-3.719 2.438c-.105.147-.188.294-.281.439c-.094-.145-.176-.29-.281-.44C18.937 12.328 17.75 11 16 11m0 2c.625 0 1.438.671 2.063 1.563c.152.218.129.231.25.439H16c-.566 0-1-.434-1-1A.985.985 0 0 1 16 13m8 0c.566 0 1 .434 1 1s-.434 1-1 1h-2.313c.122-.207.098-.22.25-.438C22.563 13.672 23.375 13 24 13m-11 4h6v8h-6zm8 0h6v8h-6z"/></svg>
        <span className="hidden md:inline-block">Gift Ready Packaging</span>
      </div>
    </div>
  );
}