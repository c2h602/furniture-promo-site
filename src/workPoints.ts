interface IPoint {
    id: number,
    title: string,
    description: string
}

export const workPoints: IPoint[] = [
{
    id: 0,
    title: 'Идея',
    description: 'Клиент приходит к нам с идеей. Это может быть изображение/ эскиз или другой референс. А мы думаем над тем, как это реализовать, делаем технические чертежи и предлагаем решения по материалам.'
}, {
    id: 1,
    title: 'Техническое задание',
    description: 'Вместе с клиентом формулируем корректное ТЗ, которое включает в себя визуализацию изделия, эскизный чертёж с габаритами, информацию по материалам и отделке, срок реализации проекта и другие обязательные пункты.'
}, {
    id: 2,
    title: 'Коммерческое предложение',
    description: 'Предпочтительно используем натуральные материалы. Но любую смету можем оптимизировать, упростив материалы или конструктив. Сможем подстроиться под бюджет клиента и согласуем коммерческое предложение'
}, {
    id: 3,
    title: 'Подготовка рабочего проекта',
    description: 'Создадим рабочую документацию и чертежи. Это фундамент качественного производства. На этом этапе утверждаем с клиентом все габариты и материалы, чертежи и приступаем к производству.'
}, {
    id: 4,
    title: 'Производство и монтаж',
    description: 'Производство занимает от 15 рабочих дней, в зависимости от сложности и объёма. Монтажом тоже занимаемся самостоятельно. Ведь мы это сделаем быстро и аккуратно.'
}];