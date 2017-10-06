const pow=function(base, n)
{
	if(n<=1)
		return base;
	base=base*pow(base, n-1);
	return base;
};
console.log(pow(5, 5));

const reverse=function(str)
{
	const n=str.length;
	rev=function(n, revstr)
	{
		revstr="";
		if(n<=0)
		{
			return revstr;
		}
		revstr=str[n-1]+rev(n-1);
		return revstr;
	};
	return rev(n);
};
console.log(reverse("abcd"));



const f=function(n){
	const original=n;
const star=function(n, k)
{
	k=2*n-1;
	const st=function(k, b)
	{
		b="";
		if(k<=0)
			return b;
		b="*"+st(k-1);
		return b;
	};
		
		const gh=function(n, sp)
		{
			sp="";
			if(n>=original)
				return sp;
			sp=" "+gh(n+1);			
			return sp;		
		};
	return gh(n) + st(k);
};
const tristar=function(n)
{
	if(n<=0)
		return;
	console.log(star(n));
	tristar(n-1);
};
return tristar(n);
};
f(4);




const checkerboard=function(n, worb)
{const original=n;
const check=function(n, worb)
{
	if(n<=0)
		return "";
	if(worb)
		return " "+check(n-1, !worb);
	else
		return "*"+check(n-1, !worb);
};
const func=function(n)
{
	if(n<=0)
		return;
	if(n%2===0)
		console.log(" "+check(2*original));
	else
		console.log(check(2*original));
	func(n-1);
};
return func(n);
};
checkerboard(5);


const sailboat=function(n)
{
	if(n%2===0)
		n=n-1;
	const f4=function(n, original)
	{
		original=n;
		const gh=function(n, sp)
		{
			sp="";
			if(n>=original)
				return sp;
			sp=" "+gh(n+2);			
			return sp;		
		};
		const body=function(n, star)
		{
			star="";
			if(n<=0)
				return "";
			star="*"+body(n-1);
			return star;
		};
		const print=function(n)
		{
			if(n<original-4)
				return "";
			console.log(gh(n)+body(n));
			print(n-2);
		};
		return print(n);
	};
	const f1=function(n,  k, c, d)
	{
		k=(n-1)/2;
		c=k;
		d=k+1;
		const star1=function(k, d)
		{
			const f=function(k, d, e)
			{
				if(k<=0)
				{
					e=d;
					const finalst=function(k, e, sp)
					{
						sp="";
						if(e>c)
							return "";
						sp= "*"+finalst(k, e+1);
						return sp;
					};
					return finalst(k, e);
				}
			
				return " "+f(k-1, d);	
			};
			const p=function(k, d)
			{
				if(k<=0)
					return "";
				console.log(f(k, d-1));
				p(k-1, d-1);
			};
			return p(k, d);
		};
		return star1(k, d);
	};
	const f2=function(n, k, b, c, z)
	{
		k=(n-1)/2;
		b=(n-3)/2;
		c=b;
		z=c-1;
		const star2=function(c, z)
		{
			const f1=function(c, z)
			{
				
				if(c>b)
				{				
					const finalst=function(z, sp)
					{
						sp="";
						if(z<0)
							return "";
						sp="*"+finalst(z-1);
						return sp;
					};
					return finalst(z);
				}
				return" "+f1(c+1, z);
			};
			const printstar2=function(c, z)
			{
				if(c<=0)
					return "";
				console.log(" "+f1(c, z));
				printstar2(c-1, z-1);
			};
			return printstar2(c, z);
		};
		return star2(c, z);
	};
	const f3=function(n, k, sp)
	{
		sp="";
		k=(n-1)/2;
		const last2=function(k, sp)
		{
			if(k<=0)
				return "*";
			sp=" "+last2(k-1);
			return sp;
		};
		console.log(last2(k, sp));
		console.log(last2(k, sp));
	};
	const sail=[f1(n), f2(n), f3(n), f4(n)];
	return sail;
};
sailboat(11);