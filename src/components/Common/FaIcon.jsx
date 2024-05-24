import {
    FaPlaneDeparture,
    FaBed,
    FaBagShopping,
    FaPersonHiking,
    FaBook,
    FaTree,
    FaCalendar,
    FaBriefcase,
    FaGuitar,
    FaGolfBallTee,
    FaMartiniGlass,
    FaTags,
    FaStore,
    FaUmbrellaBeach,
    FaUtensils,
    FaUsers,
    FaMapLocationDot,
    FaSpa,
    FaCircleInfo,
    FaCar,
    FaBicycle,
    FaMapLocation
} from 'react-icons/fa6';

const components = {
    "TIPRECAGEVIA": FaPlaneDeparture,
    "TIPRECALOJAM": FaBed,
    "TIPRECCOMPRA": FaBagShopping,
    "TIPRECACTGUI": FaPersonHiking,
    "TIPRECESCESP": FaBook,
    "TIPRECAREANATURAL": FaTree,
    "TIPRECEVENTO": FaCalendar,
    "TIPRECEVEPROF": FaBriefcase,
    "TIPRECFLAMENCO": FaGuitar,
    "TIPRECGOLF": FaGolfBallTee,
    "TIPRECOCIONOCTURNO": FaMartiniGlass,
    "TIPRECOFERTA": FaTags,
    "TIPRECOTRCOM": FaStore,
    "TIPRECPARQUESOCIO": FaTree,
    "TIPRECPLAYA": FaUmbrellaBeach,
    "TIPRECRESTAUR": FaUtensils,
    "TIPRECCONVCONG": FaUsers,
    "TIPRECRUTATURIS": FaMapLocationDot,
    "TIPRECSALUDBELLEZA": FaSpa,
    "TIPRECSERVINF": FaCircleInfo,
    "TIPRECTRANSPORTE": FaCar,
    "TIPRECDEPORTE": FaBicycle,
    "TIPRECVISITA": FaMapLocation
}

function FaIcon({ resourceTypeCode, className }) {
    const Icon = components[resourceTypeCode];

    return (
        <div className={className}>
            <Icon />
        </div>
    );
}

export default FaIcon;
