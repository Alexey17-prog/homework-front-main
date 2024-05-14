import { CurrentUser } from './CurrentUser';
import {UsersObjectType} from "./HW2";

// Используйте уже определенные типы для пропсов
export type UserList2PropsType = {
	users: UsersObjectType; // Теперь типизировано
	filterUsers: () => void; // Теперь типизировано
};

export const UserList2 = (props: UserList2PropsType) => {
	return (
		<div id={'hw02-users'}>
			<h2>User List:</h2>
			{/* Исправьте вызов filterUsers, чтобы он был функцией */}
			<button id={'hw02-filter-button'} onClick={props.filterUsers}>SHOW ME FRIENDS FROM LA</button>
			<ul>
				{/* Используйте компонент CurrentUser и передайте ему пользователя как проп */}
				{props.users.myFriends.map((user) => (
					<CurrentUser key={user.id} user={user} />
				))}
			</ul>
		</div>
	);
};