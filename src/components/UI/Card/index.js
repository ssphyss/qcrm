import React from 'react';
import { Card } from 'antd';
import { Tooltip } from 'antd';
import { Icon, Avatar } from 'antd';
import './index.scss'

export default class CardBox extends React.Component{
    render(){
        const { Meta } = Card;
        const hhh = {
            backgroundColor: 'rgb(229, 255, 31)'
        }
        const bbb = {
            pddding: '30px',
            backgroundColor: 'rgba(4, 64, 62, 0.1)'
        }
        const mmm = {
            pddding: '30px',
            backgroundColor: '#fff'
        }
        return(
            <div>
                <Card
                    title="Card 標題"
                    // extra={
                    //     [
                    //         <a href="#">More</a>, 
                    //         <Tooltip title="prompt text">
                    //             {/* <span>Tooltip will show when mouse enter.</span> */}
                    //             <Icon type="info-circle" theme="outlined" />
                    //         </Tooltip>
                    //     ]
                    // }
                    extra={
                        <div>
                            <a href="#">More</a>
                            <Tooltip title="prompt text">
                                {/* <span>Tooltip will show when mouse enter.</span> */}
                                <Icon type="info-circle" theme="outlined" />
                            </Tooltip>
                        </div>
                    }
                    bordered={false} 
                    style={{ width: 300 }}
                    headStyle={hhh}
                    bodyStyle={bbb}
                    haverable={true}
                    // loading={true}
                    loading={false}
                    type={'inner'}   // inner 變小
                    actions={
                        [<Tooltip>
                          <Icon type="info-circle-o" />2233
                        </Tooltip>]
                      }
                    // cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
                >       
                    <div className='chartTop'>
                        {this.props.children}
                    </div>          
                    {/* <Tooltip title="prompt text">
                        <span>Tooltip will show when mouse enter.</span>
                        <Icon type="info-circle" theme="outlined" />
                    </Tooltip> */}
                    
                    <Meta
                        // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                        title="卡片meta-Card title"
                        description="卡片meta-This is the description"     
                        style={mmm}               
                        >    
                    </Meta>              
                </Card>
            </div>
        )
    }
}

{/* <ChartCard
    bordered={false}
  title={
    <FormattedMessage id="app.analysis.total-sales" defaultMessage="Total Sales" />
  }
  action={
    <Tooltip
      title={
        <FormattedMessage id="app.analysis.introduce" defaultMessage="introduce" />
      }
    >
      <Icon type="info-circle-o" />
    </Tooltip>
  }

  total={() => <Yuan>126560</Yuan>}
    
    contentHeight={46}
>
    <Trend flag="up" style={{ marginRight: 16 }}>
    <FormattedMessage id="app.analysis.week" defaultMessage="Weekly Changes" />
    <span>12%</span>
    </Trend>
    <Trend flag="down">
    <FormattedMessage id="app.analysis.day" defaultMessage="Daily Changes" />
    <span >11%</span>
    </Trend>
</ChartCard>   */}


// import ChartCard from './../../components/UI/bizcharts/ChartCard';
// import { formatMessage, FormattedMessage } from 'umi/locale';
// import {
//   Icon,
//   Tabs,
//   Table,
//   Radio,
//   DatePicker,
//   Tooltip,
//   Menu,
//   Dropdown,
// } from 'antd';
// import {
//   MiniArea,
//   MiniBar,
//   MiniProgress,
//   Field,
//   Bar,
//   Pie,
//   TimelineChart,
// } from '@/components/Charts';
// import Trend from '@/components/Trend';
// import NumberInfo from '@/components/NumberInfo';
// import numeral from 'numeral';
// import GridContent from '@/components/PageHeaderWrapper/GridContent';
// import Yuan from '@/utils/Yuan';
// import { getTimeDistance } from '@/utils/utils';
