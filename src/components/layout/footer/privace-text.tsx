import tw from 'tailwind-styled-components';

const Text = tw.div`
  p-3 
  border-t border-gray-100
  text-sm text-center text-gray-500
`;

function PrivaceText() {
  return (
    <Text>
      <strong>موزیکو</strong> همراه لحظات زیبای شما | تمام حقوق محفوظ است
    </Text>
  );
}

export default PrivaceText;
