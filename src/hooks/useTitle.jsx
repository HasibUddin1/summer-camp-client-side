import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `Language Club | ${title}`
    }, [title])
}

export default useTitle;