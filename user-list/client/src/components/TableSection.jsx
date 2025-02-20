import NewUserBtn from "./table/NewUserBtn";
import Pagination from "./table/Pagination";
import SearchBar from "./table/SearchBar";
import Table from "./table/Table";

export default function TableSection() {
    return (
        <>
            <main className="main">
                {/* <!-- Section component  --> */}
                <section className="card users-container">
                    {/* <!-- Search bar component --> */}
                    <SearchBar />
                    {/* <!-- Table component --> */}
                    <Table />
                    {/* <!-- New user button  --> */}
                    <NewUserBtn />
                    {/* <!-- Pagination component  --> */}
                    <Pagination />
                </section>
            </main >
        </>
    );
}