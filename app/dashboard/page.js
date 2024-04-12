import { currentUser } from '@clerk/nextjs';
import Datagrid from "./components/datagrid";
const user = await currentUser();

async function Dashboard() {
    const user = await currentUser();

    return (
        <div>
            <Datagrid username={user?.firstName} />
        </div>)
}
export default Dashboard