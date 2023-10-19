import {getImages} from '../Images';

const slides = [
  {
    key: 1,
    title: 'Tìm nơi ở tốt\nvới giá tốt nhất',
    text: 'Tìm kiếm ngay để có được nơi ở tốt với giá tốt nhất cho gia đình bạn.',
    image: getImages().picture_1,
  },
  {
    key: 2,
    title: 'Bán nhanh tài sản \nchỉ với một lần chạm',
    text: 'Không còn khó khăn khi bán tài sản, chỉ cần một lần chạm để hoàn tất giao dịch.',
    image: getImages().picture_2,
  },
  {
    key: 3,
    title: 'Sự lựa chọn hoàn hảo cho\nngôi nhà tương lai của bạn',
    text: 'Chúng tôi tự hào giới thiệu sự lựa chọn hoàn hảo cho ngôi nhà tương lai của bạn - chắc chắn sẽ không làm bạn thất vọng.',
    image: getImages().picture_3,
  },
];
export default slides;
