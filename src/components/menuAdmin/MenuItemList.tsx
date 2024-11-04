import { MenuItemType } from '../home/menuList/menuData';

interface MenuItemListProps {
    items: MenuItemType[];
    onEdit: (item: MenuItemType) => void;
    onDelete: (id: string) => void;
}

const MenuItemList = ({ items, onEdit, onDelete }: MenuItemListProps) => {
    return (
        <div>
            <h2>Menu Items</h2>
            <ul>
                {items.map((item) => (
                    <li key={item.id}>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button onClick={() => onEdit(item)}>Edit</button>
                        <button onClick={() => onDelete(item.id!)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MenuItemList;
