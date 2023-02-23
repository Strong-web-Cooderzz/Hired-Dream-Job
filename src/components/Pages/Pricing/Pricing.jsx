import React from 'react';

const Pricing = () => {
    return (

        <div>
            <div className="flex justify-center text-xl mb-4">
                <h1>Pricing Packages</h1>
            </div>


 <div class = "bg-gray-100 flex p-4">

<div className="max-w-sm mx-auto p-8 bg-white rounded-xl shado-md space-y-2 border border-sky-200">
    <div>Basic</div>
    <div>$199 / monthly</div>
    <div>
        <p>30 job posting</p>
        <p>3 featured job</p>
        <p>Job displayed for 15 days</p>
        <p>Premium Support 24/7</p>
    </div>
    <button className="px-4 py-1 border border-sky-200 rounded-full text-sm text-sky-600 bg-sky-100" >Add to Cart</button>
</div>

<div className="max-w-sm mx-auto p-8 bg-white rounded-xl shado-md space-y-2 border border-sky-200">
    <div>Standerd</div>
    <div>$499 / monthly</div>
    <div>
        <p>30 job posting</p>
        <p>3 featured job</p>
        <p>Job displayed for 15 days</p>
        <p>Premium Support 24/7</p>
    </div>
    <button className="px-4 py-1 border border-sky-200 rounded-full text-sm text-sky-600 bg-sky-100" >Add to Cart</button>
</div>

<div className="max-w-sm mx-auto p-8 bg-white rounded-xl shado-md space-y-2 border border-sky-200">
    <div>Extended</div>
    <div>$799 / monthly</div>
    <div>
        <p>30 job posting</p>
        <p>3 featured job</p>
        <p>Job displayed for 15 days</p>
        <p>Premium Support 24/7</p>
    </div>
    <button className="px-4 py-1 border border-sky-200 rounded-full text-sm text-sky-600 bg-sky-100" >Add to Cart</button>
</div>

</div>

        </div>

    );
};

export default Pricing;