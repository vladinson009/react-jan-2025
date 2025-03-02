import Pagination from "./pagination/Pagination";
import SearchBar from "./search/SearchBar";
import TableComponent from "./table/TableComponent";

export default function Main() {

    return (
        <main className="main">
            {/* <!-- Section component  --> */}
            <section className="card users-container">
                {/* <!-- Search bar component --> */}
                <SearchBar />
                {/* <!-- Table component --> */}
                <TableComponent />
                {/* <!-- Pagination component  --> */}
                <Pagination />
            </section>






        </main>
    )
}