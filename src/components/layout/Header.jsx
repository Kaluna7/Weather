export default function Header(){
    return(
        <div className="flex bg-black h-50 w-full text-white items-center justify-center">
            <ol className="flex flex-row justify-center text-[50px] gap-10">
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ol>
        </div>
    );
}