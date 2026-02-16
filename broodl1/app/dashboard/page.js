// app/dashboard/page.js
import Dashboard from "@/components/Dashboard";
import Loadning from "@/components/Loading";
import Login from "@/components/Login";
import Main from "@/components/Main";

export const metadata = {
  title: "Broodl ⋅ Dashboard",
};

export default function DashboardPage() {
  return (
  <Main>
    <Dashboard />
  </Main>
  )
}
