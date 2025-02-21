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
                {/* <!-- New user button  --> */}
                <button className="btn-add btn">Add new user</button>
                {/* <!-- Pagination component  --> */}
                <Pagination />
            </section>






        </main>
    )
}