import { Button } from "@heroui/react";
import Link from "next/link";
import CarCard from "./CarCard";

const Featured = async () => {
    const res = await fetch(`http://localhost:5000/featured`)
    const cars = await res.json()
    console.log(cars)
    return (
        <div className="mt-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
             <div>
               <h1 className="text-3xl font-bold">Featured Cars</h1>
            <p className="text-muted">Handpicked car options for your next adventure</p>
         </div>

     <Link href={'/explore-cars'}><Button variant="outline" className={'rounded-none border-cyan-500 border-2 text-cyan-500'}>All Cars</Button></Link>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10">
            {cars.map(car => <CarCard key={car._id} car={car}/>)}
        </div>
            
        </div>
    );
};

export default Featured;