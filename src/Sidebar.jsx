import {FaTimes} from 'react-icons/fa';
import { useGlobalContext } from './Context';
import sublinks from './data';



const Sidebar = () => {
 const {isSidebarOpen, closeSidebar}= useGlobalContext ();
  return (
    <aside className='sidebar'>
      <div className="sidebar-container">
        <button className='close'>
          <FaTimes/>
        </button>
        <div className='sidebar-links'>
          {sublinks.map((item)=>{
            const {links, page, pageId}  = item;
             return <article key={pageId}>
              <h4>{page}</h4>
             </article>
          })}
        </div>
      </div>
    </aside>
  )
};
export default Sidebar;
