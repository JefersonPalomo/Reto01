import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
            <div className="select-none flex">
                <div class="w-64 h-screen bg-gray-200 p-6">
                    <h1 class="text-black text-2xl font-semibold"><a href="/">Main</a></h1>
                    <form id="search-form" className="mt-3" role="search">
                        <input
                            className="p-1"
                            id="q"
                            aria-label="Search R"   
                            placeholder="Search your restaurant"
                            type="search"
                            name="q"
                        />
                    </form>
                    <div class="mt-3 flex hover:text-blue-700">
                        <svg className="flex-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                        <a href="/restaurants" class="flex-2 text-black hover:text-blue-700">List of restaurants</a>
                    </div>
                </div>
                <div className="flex-1">
                    <Outlet/>
                </div>
            </div>
        </>
    )
};