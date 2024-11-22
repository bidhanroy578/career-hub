import List from "./List";

const CategoryList = () => {
    const list = [
        {
            id: 1,
            name: 'Account & Finance',
            jobs: 300,
            image:'/public/icons/accounts.png'
        },
        {
            id: 2,
            name: 'Creative Design',
            jobs: 100,
            image:'/public/icons/creative.png'
        },
        {
            id: 3,
            name: 'Marketing & Sales',
            jobs: 150,
            image:'/public/icons/marketing.png'
        },
        {
            id: 4,
            name: 'Engineering Job',
            jobs: 224,
            image:'/public/icons/chip.png'
        },
    ]
    return (
        <div className="max-w-6xl mx-auto">
            <h3 className="font-extrabold text-5xl">Job Category List</h3>
            <p className="font-medium ">Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className="flex flex-wrap gap-5">
                {
                    list.map(item =><List key={item.id} item={item}></List>)
                }
            </div>
        </div>
    );
};




export default CategoryList;