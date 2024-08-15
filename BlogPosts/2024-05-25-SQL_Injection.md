---
layout: post
thumbnail: /GDSC_Dong-Eui_University_Vertical_color.png
title: "SQL injection 공격"
date: 2024-05-25T18:00:00Z
tags: [information, security, SQL]
author: 박소은
---

# SQL injection 공격

---

### **SQL(Structured Query Language, 구조적 질의 언어)**

- 데이터베이스를 구축하고 활용하기 위해 사용하는 언어

관계형 데이터베이스 시스템에서 자료를 관리 및 처리하기 위해 설계된 언어로,

SQL은 **데이터 정의 언어**, **데이터 조작 언어, 데이터 제어 언어**로 나뉜다.

| 종류                   | 기능                                                     |
| ---------------------- | -------------------------------------------------------- |
| 데이터 정의 언어(DDL)  | 릴레이션 생성, 릴레이션 삭제, 릴레이션 변경              |
| 데이터 조작 언어(DML)  | 검색, 삽입, 삭제, 갱신                                   |
| 데이터 제어 언어 (DCL) | 데이터 접근 및 사용 권한 부여, 취소 (관리자가 주로 사용) |

---

## SQL Injection 공격 (SQL 삽입)

🌐**웹 애플리케이션** 허점을 이용하여 임의의 SQL 문장을 넣어서 실행함으로써, 데이터베이스를 비정상적으로 동작하게 하는 사이버 공격

> ✔️ - (_Javascript*시큐어코딩*가이드(2023년\_개정본)_)
>
> ➡️ 데이터베이스와 연동된 웹 응용프로그램에서 입력된 데이터에 대한 유효성 검증을 하지 않을 경우 공격자가 입력 폼 및 URL 입력란에 SQL 문을 삽입하여 DB로부터 정보를 열람하거나 조작할 수 있는 보안 약점

![SQL Injection 공격 원리](/assets/img/blogs/2024-05-25/SQL-Injection.png)

**왜 발생하는가?**
→ 사용자가 입력한 데이터의 유효성 검증이 제대로 이루어지지 않았거나 이스케이핑되지 않으면
SQL 쿼리에 악성 코드가 삽입 될 수 있습니다.

→ 보안에 대한 인식이 부족하여 발생, 지속적 점검과 패치가 필요하다.

→ 복잡한 데이터베이스의 구조를 가지게 되면 취약점을 찾기 어려워진다.

---

JS에서 DB시스템과 상호작용 할 수 있는 라이브러리를 제공하며 크게 3가지로 구분하는데,

1. **데이터베이스 드라이버** : 클라이언트와 커넥터를 사용해 데이터베이스와 직접 상호작용

➡️ 개발자가 직접 쿼리 문자열을 정의, DB에 질의
→ 검증되지 않은 외부 입력값으로 인한 SQL 삽입 공격

2. **쿼리 빌더** : 데이터베이스 클라이언트보다 한 단계 높은 계층에서 동작하며,
   자바 스크립트 코드로 쿼리 데이터 생성, DB와 상호작용

3. **ORM**: 개발자가 DB를 추상화 된 형식으로 다룰 수 있게 해주는 데이터베이스 툴킷

➡️ 복잡한 조건의 쿼리문 생성 어려움, 성능 저하 등의 이유로
ORM에서 지원하는 원시 쿼리 기능을 사용하면 공격에 취약!

✨ **SQL 인젝션 공격**은 데이터베이스와 직접 상호작용하는 **서버 코드에서만 발생** ✨




## 공격 유형은?

- 대표적인 2가지

### 1. Error based SQL Injection

논리적 에러를 이용한 SQL Injection (가장 일반적이고 많이 쓰임)

#### 공격 방법

> 1️⃣ SELECT \* FROM User WHERE id = ‘INPUT1’ AND password = ‘INPUT2’
>
> 2️⃣ 해커가 `‘OR 1=1 --'` 또는 `‘OR’ 1=1` 입력
>
> 3️⃣ SELECT * FROM User WHERE id = ‘OR 1=1 -- *AND ~_ **→** SELECT _ FROM Users

`OR 1=1` 이라는 구분을 이용하여 WHERE절을 참으로 만들어 주고, `--`을 넣어서 뒤의 구문을 모두 주석 처리

→ `SELECT * FROM Users` 를 통해 **Users 테이블에 있는 모든 정보에 대해 조회 가능**



### 2. Union-based SQL Injection

union의 기능을 이용한 SQL Injection

- **union**이란?

여러 쿼리문들을 합쳐서 하나의 쿼리문으로 만드는 방법
중복된 값을 제거해줌
→ 중복된 값을 제거하는 연산이 추가로 수행, **UNION ALL보다 속도가 느림**

- **union all**이란?

NUION과 동일하게 여러 쿼리문들을 하나의 쿼리문으로 만들어주는 방법
그러나, 중복된 값을 모두 보여줌




#### 공격 방법

> 1️⃣ 컬럼 수 일치시키기
>
> 2️⃣ 데이터베이스 정보 알아내기
>
> 3️⃣ 공격 및 추출



1. union 구문은 열의 수와 데이터 타입이 일치해야 동작하기 때문에 컬럼 수를 일치 시켜야 한다.

   > ✔️ 컬럼 수 확인하기  
   > `union select all 1#`  
   > `union select all 1, 2#`  
   > `union select all 1, 2, 3#`  
   > … // 순서대로 돌리면서 컬럼 수 확인하기, #은 MySQL에서 주석 처리를 하는 구문이다.

2. 컬럼 수 확인 후, union 연산자를 사용하여 데이터를 추출한다.

   > ✔️ MySQL 버전 알아보기  
   > `union select all 1,2,3,4,@@version,6,7#`

3. UNION 연산자를 사용하여 중요한 테이블 이름, 데이터를 조회해 데이터 베이스에 있는 중요한 정보들을 조회할 수 있게 된다. → **`UNION SELECT column1, column2 FROM table_name`**




## **SQL Injection 예방**

### (1) 입력값 검증

입력 받은 값이 DB Query에 동적으로 영향을 주는 경우, 입력된 값이 개발자가 의도한 값인지 검증해보아야 한다.

- 예를 들어, _/_, –, ‘, “, ?, #, (, ), ;, @, =, _, + 와 같은 특수 기호나_ union, select _같은 단어_



### (2) 인자화된 쿼리 사용하기

사용자가 입력한 값을 그대로 쿼리 문자열로 만들지 않고, **DB API에서 제공하는 기능**을 사용해 쿼리 내에 사용자 입력값을 구성하는 방법을 의미 → 쿼리의 조작이 불가능 해진다.

#### 데이터베이스 드라이버 예시

```javascript
const query = "SELECT email FROM user WHERE user_id = **${userInput}**";
```

검증 없이 쿼리에 그대로 삽입하고 있다.

```javascript
const query = 'SELECT email FROM user WHERE **user_id = ?';**
```

#### ORM 예시

가장 일반적으로 사용하는 ORM 라이브러리인 **Sequealize**에서는 쿼리 인자화를 사용해 쿼리를 구성하기 때문에 SQL 삽입 공격으로부터 안전함

```javascript
const query = 'SELECT email FROM user WHERE **user_id = $1';**

 sequelize.query(query, {bind: [userInput], type: QueryTypes.SELECT})
	.then((result) => {
		 return res.send(result);
	}).catch((err) => {
		 console.log(err);
	});
```

쿼리에 삽입할 값은 $number로 구분! (두 개인 경우 $1, $2)

이 외에 웹 애플리케이션 방화벽(WAF) 사용, 오류 메세지 관리, 정기적 취약점 점검 등이 있다.
