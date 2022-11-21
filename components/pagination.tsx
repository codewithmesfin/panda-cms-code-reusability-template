import Link from "next/link";
import React, { useState } from "react";
import Icon from "./icon";

interface PROPS {
    page: number
    total: number
}

export default function Pagination({ page, total }: PROPS) {
    const [currentPage, setCurrentpage] = useState(page)
    return <div className="flex items-center justify-between bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
            <Link
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Previous
            </Link>
            <Link
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
                Next
            </Link>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div>
                <p className="text-sm text-gray-700">
                    Showing <span className="font-medium">1</span> to <span className="font-medium">10</span> of{' '}
                    <span className="font-medium">97</span> results
                </p>
            </div>
            <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                    <Link
                        href="#"
                        className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                        <span className="sr-only">Previous</span>
                        <Icon path="left" />
                    </Link>
                    {
                        [page, page + 1, page + 2].map((x, i) => <Link key={i}
                            href="#"
                            aria-current="page"
                            className={x === currentPage ? `relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20` :
                                'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'}
                        >
                            {x}
                        </Link>)
                    }

                    <span className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700">
                        ...
                    </span>
                    {
                        [total-2, total-1, total].map((x, i) => <Link key={i}
                            href="#"
                            aria-current="page"
                            className={x === currentPage ? `relative z-10 inline-flex items-center border border-indigo-500 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600 focus:z-20` :
                                'relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20'}
                        >
                            {x}
                        </Link>)
                    }
                    <Link
                        href="#"
                        className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
                    >
                        <span className="sr-only">Next</span>
                        <Icon path="right" />
                    </Link>
                </nav>
            </div>
        </div>
    </div>
}