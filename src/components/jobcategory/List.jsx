import PropTypes from 'prop-types';

const List = ({item}) => {
    return (
        <div className='bg-[#FAF8FF] p-10 my-2 rounded-xl flex-1'>
            <div className='bg-[#EFECFF] w-fit p-4 rounded-xl'><img src={item.image} alt="" /></div>
            <h3 className='font-extrabold text-xl text-[#474747]'>{item.name}</h3>
            <p className='font-medium text-[#A3A3A3]'>{item.jobs} Jobs Available</p>
        </div>
    );
};

List.propTypes = {
    item: PropTypes.object,
};

export default List;