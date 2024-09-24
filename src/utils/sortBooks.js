import {compareAsc, parseISO, compareDesc} from "date-fns"

export const sortBooks = (books,sortBy) => {

    let newSortedBooks = [...books];

    switch (sortBy) {

        case 'recommended':
            newSortedBooks = newSortedBooks.sort((a, b) => 

                a.airlineName.localeCompare(b.airlineName)
            );
            break;

        
        case 'oldest':
            newSortedBooks = newSortedBooks.sort((a, b) =>
                compareDesc(parseISO(a.date), parseISO(b.date))
            );
            break;
    
        case 'newest':
            newSortedBooks = newSortedBooks.sort((a, b) =>
                compareAsc(parseISO(a.date), parseISO(b.date))
            );
            break;
    
        case 'highPrice':
            newSortedBooks = newSortedBooks.sort((a, b) => b.price - a.price);
            break;
    
        case 'lowPrice':
            newSortedBooks = newSortedBooks.sort((a, b) => a.price - b.price);
            break;
    
        default:
            break;
    }

    

    return newSortedBooks;
}