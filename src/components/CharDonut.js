import React from "react";
import { Card, Title, DonutChart,BadgeDelta, Block, ColGrid, Flex, Metric, ProgressBar, Text } from "@tremor/react";
import 'bootstrap/dist/css/bootstrap.css';

const cities=[
    {
        name : 'Matagalpa',
        sales : 160
    },
    {
        name : 'Jinotega',
        sales : 80
    },
    {
        name: 'Managua',
        sales: 500
    }

]
const data = [
    {
        title: 'Sales',
        metric: '$ 12,699',
        progress: 15.9,
        target: '$ 80,000',
        delta: '13.2%',
        deltaType: 'moderateIncrease',
    },
    {
        title: 'Profit',
        metric: '$ 45,564',
        progress: 36.5,
        target: '$ 125,000',
        delta: '23.9%',
        deltaType: 'increase',
    },
    {
        title: 'Customers',
        metric: '1,072',
        progress: 53.6,
        target: '2,000',
        delta: '10.1%',
        deltaType: 'moderateDecrease',
    },
]

const CharDonut = () =>{
    return(
        <>
        <Card>
            <Title>Sales by City</Title>
            <DonutChart
            data={cities}
            category ='sales'
            marginTop="mt-6"
            />
        </Card>
        <ColGrid numColsMd={2} numColsLg={3} marginTop="mt-6" gapX='gap-x-6' gapY='gap-y-6' >
        { data.map( (item) => (
            <Card key={item.title}>
                 <Flex alignItems='items-start'>
                    <Block>
                        <Text>{item.title}</Text>
                        <Metric>{item.metric}</Metric>
                    </Block>
                    <BadgeDelta text={item.delta} />
                 </Flex>   

                 <Flex marginTop='mt-4' spaceX='space-x-2'>
                    <Text>{`${item.progress}% (${item.metric})`}</Text>
                    <Text>{item.target}</Text>
                 </Flex>
                <ProgressBar percentageValue={item.progress} marginTop="mt-3"/> 

            </Card>    
        )) }
    </ColGrid>
    </>
    )
}
export default CharDonut