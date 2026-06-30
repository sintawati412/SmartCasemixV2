import { Link } from "react-router-dom";

export default function DashboardCard({

    title,

    total,

    desc,

    icon,

    color,

    link,

}){

    return(

        <Link
            to={link}
            className="dashboardCard"
        >

            <div
                className="dashboardIcon"
                style={{
                    background:color
                }}
            >

                {icon}

            </div>

            <div className="dashboardContent">

                <h2>{total}</h2>

                <h3>{title}</h3>

                <p>{desc}</p>

            </div>

        </Link>

    );

}