import {

    UserButton,
} from "@clerk/nextjs";

const Dashboard = () => {
    return <div>Hello <UserButton afterSignOutUrl="/" /></div>
}
export default Dashboard