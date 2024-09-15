import styles from './App.module.css';
import { useState } from 'react';

export const App = () => {
	const [operand1, setOperand1] = useState('0');
	const [operator, setOperator] = useState('');
	const [operand2, setOperand2] = useState('');
	const [isResult, setIsResult] = useState(false);

	const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

	const output = operand1 + operator + operand2;

	return (
		<div className={styles.app}>
			<header className={styles.header}>
				<h1>Калькулятор</h1>
			</header>
			<div className={`${styles.screen} ${isResult ? styles.screenResult : ''}`}>
				{output}
			</div>
			<div className={styles.buttons}>
				<div className={styles.leftButtons}>
					{NUMS.map((num) => (
						<button
							className={styles.button}
							onClick={() => {
								if (operator === '') {
									if (operand1 === '0') {
										setOperand1(num);
									} else {
										setOperand1(operand1 + num);
									}
								} else {
									if (operand2 === '0') {
										setOperand2(num);
									} else {
										setOperand2(operand2 + num);
									}
								}
								setIsResult(false);
							}}
						>
							{num}
						</button>
					))}
				</div>
				<div className={styles.rightButtons}>
					<button
						className={styles.button}
						onClick={() => {
							setOperand1('0');
							setOperator('');
							setOperand2('');
							setIsResult(false);
						}}
					>
						C
					</button>
					<button
						className={styles.button}
						onClick={() => {
							setOperator('+');
							setIsResult(false);
						}}
					>
						+
					</button>
					<button
						className={styles.button}
						onClick={() => {
							setOperator('-');
							setIsResult(false);
						}}
					>
						-
					</button>
					<button
						className={styles.button}
						onClick={() => {
							if (operand2 === '') {
								setOperator('');
							} else {
								switch (operator) {
									case '+':
										setOperand1(Number(operand1) + Number(operand2));
										setOperator('');
										setOperand2('');
										break;
									case '-':
										setOperand1(Number(operand1) - Number(operand2));
										setOperator('');
										setOperand2('');
										break;
									default:
										// default стоит для галочки
										break;
								}
							}
							setIsResult(true);
						}}
					>
						=
					</button>
				</div>
			</div>
		</div>
	);
};
