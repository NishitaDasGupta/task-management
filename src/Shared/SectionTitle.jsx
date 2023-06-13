
const SectionTitle = ({ subHeading, heading }) => {
    return (
        <div className="md:w-3/12 text-center mx-auto mt-16 mb-10">
            <p className="text-orange-600 mb-2">---{subHeading}---</p>
            <p className="uppercase text-3xl py-3 border-y-2 mb-11">{heading}</p>
        </div>
    );
};

export default SectionTitle;