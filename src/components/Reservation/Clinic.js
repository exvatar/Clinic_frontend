import { List, Avatar } from 'antd';

const data = [
	{
		title: 'Clinic 1',
	},
	{
		title: 'Clinic 2',
	},
	{
		title: 'Clinic 3',
	}
];
const onClickSetClinic = (item) => {
	console.log(item)
}

function Clinic() {
	return (
		<List
			itemLayout="horizontal"
			dataSource={data}
			renderItem={item => (
				<List.Item
					onClick={() => {onClickSetClinic(item.title)}}
					className="clinic_list_item"
				>
					<List.Item.Meta
						avatar={
							<img style={{ width: "100px" }} alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />
						}
						title={<a>{item.title}</a>}
						description="Ant Design, a design language for background applications, is refined by Ant UED Team"
					/>
				</List.Item>
			)}
		/>
	)
}

export default Clinic
