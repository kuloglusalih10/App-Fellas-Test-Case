import {compareAsc, parseISO, compareDesc} from "date-fns"

export const sortBooks = (books,sortBy) => {

    let newSortedBooks = [...books];  

    switch (sortBy) {

        case 'recommended':
            newSortedBooks = newSortedBooks.sort((a, b) => 

                a.airlineName.localeCompare(b.airlineName)    // alfebeye göre sıralama
            );
            break;

        
        case 'oldest':
            newSortedBooks = newSortedBooks.sort((a, b) =>
                compareDesc(parseISO(a.date), parseISO(b.date))   // tarihi uzak olana göre sıralama
            );
            break;
    
        case 'newest':
            newSortedBooks = newSortedBooks.sort((a, b) =>
                compareAsc(parseISO(a.date), parseISO(b.date))   // tarihi yakın olana göre sıralama
            );
            break;
    
        case 'highPrice':
            newSortedBooks = newSortedBooks.sort((a, b) => b.price - a.price);   // yüksek fiyata göre sıralama
            break;
    
        case 'lowPrice':
            newSortedBooks = newSortedBooks.sort((a, b) => a.price - b.price);   // düşük fiyata göre sıralama
            break;
    
        default:
            break;
    }

    

    return newSortedBooks;
}