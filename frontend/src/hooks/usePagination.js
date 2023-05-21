import { CurrencyPoundTwoTone } from "@mui/icons-material";
import { useState } from "react";

const usePagination = (data, pageSize) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(data.length / pageSize);

    const currentData = () => {
        const from = (currentPage - 1) * pageSize;
        const to = from + pageSize;
        return data.slice(from, to)
    }

    const nextPage = () => {
        setCurrentPage(currentPage => Math.min(currentPage + 1, maxPage));
    }

    const prevPage = () => {
        setCurrentPage(currentPage => Math.max(currentPage - 1, 1));
    }

    const jumpToPage = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage))
    }

    return {nextPage, prevPage, jumpToPage, currentData, currentPage, maxPage};
}

export default usePagination;