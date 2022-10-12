import Proptypes from "prop-types";


const GridItem = ({ id, title, url, category }) => {
     return (
          <div
               className="
        flex flex-col justify-center items-center
        bg-gradient-to-r from-sky-500 to-indigo-500
        rounded
        h-auto
        w-2.5/5 md:w-2/5
        m-1"
          >
               <h2
                    className="
            absolute
            backdrop-blur-sm bg-white/30
            font-sans font-medium
            w-1/4"
               >
                    {title}
               </h2>
               <div
                    className="
            w-5/5
            h-4/4"
               >
                    <img
                         className="
                    shadow-2xl
                    rounded
                    "
                         src={url}
                         alt={category}
                    />
               </div>
          </div>
     );
};

GridItem.propTypes = {
     title: Proptypes.string.isRequired, 
     url: Proptypes.string.isRequired
}


export default GridItem;
