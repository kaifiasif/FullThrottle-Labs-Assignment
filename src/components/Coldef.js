export default {
	columnDefs: [
		{
			headerName: 'ID',
			field: 'id'
		},
		{
			headerName: 'Name',
			field: 'real_name'
		},
		{
			headerName: 'Location',
			field: 'tz'
		},
		{
			headerName: ' Sessions',
			cellRendererFramework: 'ActionCellRenderer',
			cellHeight: 40
		}
	],
	rowData: [
		{
			id: 'W012A3CDE',
			real_name: 'Egon Spengler',
			tz: 'America/Los_Angeles',
			start_time: 'Feb 1 2020  1:33PM',
			end_time: 'Feb 1 2020 1:54PM'
		},
		{
			id: 'W07QCRPA4',
			real_name: 'Glinda Southgood',
			tz: 'Asia/Kolkata',
			start_time: 'Feb 1 2020  1:33PM',
			end_time: 'Feb 1 2020 1:54PM'
		}
	]
};
