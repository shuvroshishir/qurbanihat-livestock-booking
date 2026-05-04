import React from 'react';

const AnimalDetails = async ({ params }) => {
    const { id } = await params;
    console.log(id);


    return (
        <div>
            AnimalDetails
        </div>
    );
};

export default AnimalDetails;