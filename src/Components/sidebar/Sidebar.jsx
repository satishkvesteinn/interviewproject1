import { HomeOutlined, WebOutlined, GrainOutlined, AccessibilityOutlined, DnsOutlined, FolderOutlined, AddBoxOutlined, DesignServicesOutlined } from '@mui/icons-material'
import './sidebar.scss'

const Sidebar = () => {

  let buttons = document.querySelectorAll('li');
  console.log(buttons);
  buttons.forEach(button => {
    console.log(button);
    button.addEventListener('click', function () {
      buttons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
    });
  });

  return (
    <div className='sidebar'>
      <div className="logo">
        <img src="https://static.remove.bg/remove-bg-web/ea4eaf12fdb825d09a927ec03bfcfc723af95931/assets/start-1abfb4fe2980eabfbbaaa4365a0692539f7cd2725f324f904565a9a744f8e214.jpg" alt="" />
        <h2>Radeside</h2>
      </div>
      <p className='desc'>Front work was one hand skills</p>
      <div className="menuSection">
        <h2 className="menuTitle">Menu</h2>
        <div className="menuList">
          <ul id='menu'>
            <li className='active'>
              <HomeOutlined className='icon' />
              <span className="listItem">Home Page</span>
            </li>
            <li>
              <DnsOutlined className='icon' />
              <span className="listItem">Team Data</span>
            </li>
            <li>
              <FolderOutlined className='icon' />
              <span className="listItem">Team Project</span>
            </li>

            <li>
              <AddBoxOutlined className='icon' />
              <span className="listItem">Team Collect</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="menuSection">
        <h2 className="menuTitle">Skills</h2>
        <div className="menuList">
          <ul>
            <li>
              <DesignServicesOutlined className="icon" />
              <span className="listItem">UI/UX design</span>
            </li>
            <li>
              <WebOutlined className="icon" />
              <span className="listItem">Web design</span>
            </li>
            <li>
              <GrainOutlined className="icon" />
              <span className="listItem">illustrations</span>
            </li>

            <li>
              <AccessibilityOutlined className="icon" />
              <span className="listItem">Dynamic effects</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar