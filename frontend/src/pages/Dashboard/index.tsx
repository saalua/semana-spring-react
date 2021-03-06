import BarChart from "components/BarCharts";
import DataTable from "components/DataTable";
import DonutBar from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
    return (
        <>
        <NavBar />
        <div className="container">
          <h1 className="text-primary py-3">Dashboard de vendas</h1>
          
          <div className="row px-3">
              <div className="col-sm-6">
              <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                <BarChart />
              </div>
              <div className="col-sm-6">
                <h5 className="text-center text-secondary">Todas as vendas</h5>
                <DonutBar />
              </div>
          </div>
  
          <div className="py-3">
            <h2 className="text-primary">Todas as vendas</h2>
          </div>
          <DataTable />
        </div>
        <Footer />
      </>
    )
}

export default Dashboard;