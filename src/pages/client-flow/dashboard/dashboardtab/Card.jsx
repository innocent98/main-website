
import "../dashboard.scss"
import { LuDownload } from 'react-icons/lu'

const Card = ({cardColor, postJobNumber,cardTitle}) => {
  const handleDownload = () => {
   
    const fileContent = "you have" + "" +  postJobNumber + "" + cardTitle;
    const blob = new Blob([fileContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'file.txt';
    document.body.appendChild(a);

    a.click();

    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  return (
    <div className='dashboard_card' style={{ backgroundColor: cardColor }}>
        <div className='top'>
          <span>{postJobNumber}</span>
          <div  onClick={handleDownload}><LuDownload/></div>
        </div>
        <div className='bottom'>
          <span>{cardTitle}</span>
        </div>
    </div>
  )
}

export default Card