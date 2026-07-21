import Header from "../components/header";
import Footer from "../components/footer";

export default function Myweek03(){
    return (
        <>
        <Header />
        <div className="mt-16 flex h-[80vh] items-center justify-center bg-olive-100 bg-cover bg-center"
            style={{ backgroundImage: `url('/images/bgbook.jpg')`}}
        >
            <p className="text-emerald-800  text-4xl bg-green-50">
                Welcome to my web application...
            </p>
        </div>
        <Footer />
        </>
    );
}