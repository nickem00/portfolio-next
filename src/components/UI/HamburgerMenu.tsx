interface HamburgerMenuProps {
    onClick: () => void;
    isOpen: boolean;
}

export default function HamburgerMenu({ onClick, isOpen }: HamburgerMenuProps) {
    return (
        <button 
            className="flex flex-col gap-2 w-8 cursor-pointer bg-transparent border-none p-0"
            onClick={onClick}
            aria-label="Toggle menu"
            type="button"
        >
            <div className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 ${isOpen ? "rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]" : ""}`} />
            <div className={`rounded-2xl h-[3px] w-full bg-white duration-500 ${isOpen ? "-rotate-45" : ""}`} />
            <div className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end ${isOpen ? "rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]" : ""}`} />
        </button>
    )
}