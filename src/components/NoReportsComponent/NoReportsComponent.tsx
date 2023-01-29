import ReportsImage from '../../assets/reports-image.svg'

export const NoReportsComponent = () => {
  return (
		<div className="flex flex-col w-full text-center justify-center mt-32">
      <div className="font-bold  text-2xl">
      No reports
      </div>
      <div className="font-bold  text-base text-stone-400 max-w-[470px] mx-auto">Currently you have no data for the reports to be generated.
Once you start generating traffic through the Balance application 
the reports will be shown.</div>
<img src={ReportsImage} className="max-w-[470px] mx-auto" alt="Reports ilustration" />
    </div>)
}