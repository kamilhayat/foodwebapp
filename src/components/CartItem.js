const CartItem = ({ item, onRemove }) => {
  const { id, name, description, imageId } = item.card.info;

  return (
    <div className="flex items-center border-b border-gray-300 py-4">
      <img
        className="w-24 h-24 rounded-lg object-cover"
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/${imageId}`}
        alt={name}
      />
      <div className="ml-4 flex-1">
        <h2 className="text-lg font-bold">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
      <button
        className="ml-4 text-red-600 font-bold"
        onClick={() => onRemove(id)}
      >
        ✕
      </button>
    </div>
  );
};

export default CartItem;
