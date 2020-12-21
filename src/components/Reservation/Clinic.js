import { List } from 'antd';


function Clinic(props) {
	const clinic = props.clinic;
	const next = props.next;
	const setClinic = props.setClinic;
	const onClickSetClinic = (clinic) => {
		setClinic(clinic)
		next();
	}
	console.log(clinic)
	return (
		<List
			itemLayout="horizontal"
			dataSource={clinic}
			renderItem={item => (
				<List.Item
					onClick={() => {onClickSetClinic(item)}}
					className="clinic_list_item"
				>
					<List.Item.Meta
						avatar={
							<img style={{ width: "100px" }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
						}
						title={<a>{item.name}</a>}
						description={<p>address : {item.address}</p>}
					/>
				</List.Item>
			)}
		/>
	)
}

export default Clinic
