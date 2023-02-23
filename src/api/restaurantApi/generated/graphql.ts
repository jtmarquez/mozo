import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Bill = {
  __typename?: 'Bill';
  billProducts?: Maybe<Array<BillProduct>>;
  cost: Scalars['Int'];
  order: Order;
  state: BillStates;
};

export type BillProduct = {
  __typename?: 'BillProduct';
  bill: Bill;
  product: Product;
};

export enum BillStates {
  Finished = 'Finished',
  Paid = 'Paid',
  Pending = 'Pending',
  WaitingPayment = 'WaitingPayment'
}

export type GetOrderInput = {
  id: Scalars['ID'];
};

export type GetRestaurantInput = {
  id: Scalars['ID'];
};

export type ListOrderInput = {
  restaurantId: Scalars['ID'];
};

export type ListProductInput = {
  restaurantId: Scalars['ID'];
};

export type ListRestaurantTablesInput = {
  restaurantId: Scalars['ID'];
};

export type Order = {
  __typename?: 'Order';
  bills?: Maybe<Array<Bill>>;
  orderProducts?: Maybe<Array<OrderProduct>>;
  restaurant: Restaurant;
  state: OrderStates;
  totalCost: Scalars['Int'];
};

export type OrderProduct = {
  __typename?: 'OrderProduct';
  order: Order;
  product: Product;
};

export enum OrderStates {
  Finished = 'Finished',
  PendingProductEnrollments = 'PendingProductEnrollments',
  PendingProductRegistration = 'PendingProductRegistration',
  WaitingPayment = 'WaitingPayment'
}

export type Product = {
  __typename?: 'Product';
  billProducts?: Maybe<Array<BillProduct>>;
  cost: Scalars['Int'];
  orderProducts?: Maybe<Array<OrderProduct>>;
  restaurant: Restaurant;
  type: ProductType;
};

export enum ProductType {
  Coctel = 'Coctel',
  Dessert = 'Dessert',
  Drink = 'Drink',
  Entry = 'Entry',
  MainDish = 'MainDish',
  Salad = 'Salad'
}

export type Query = {
  __typename?: 'Query';
  getOrder?: Maybe<Order>;
  getRestaurant?: Maybe<Restaurant>;
  listOrder?: Maybe<Array<Order>>;
  listProduct?: Maybe<Array<Product>>;
  listRestaurantTables?: Maybe<Array<RestaurantTable>>;
};


export type QueryGetOrderArgs = {
  input: GetOrderInput;
};


export type QueryGetRestaurantArgs = {
  input: GetRestaurantInput;
};


export type QueryListOrderArgs = {
  input: ListOrderInput;
};


export type QueryListProductArgs = {
  input: ListProductInput;
};


export type QueryListRestaurantTablesArgs = {
  input: ListRestaurantTablesInput;
};

export type Restaurant = {
  __typename?: 'Restaurant';
  name?: Maybe<Scalars['String']>;
  orders?: Maybe<Array<Order>>;
  products?: Maybe<Array<Product>>;
  tables?: Maybe<Array<RestaurantTable>>;
};

export type RestaurantTable = {
  __typename?: 'RestaurantTable';
  restaurant: Restaurant;
  state: RestaurantTableState;
};

export enum RestaurantTableState {
  Free = 'Free',
  Used = 'Used'
}



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Bill: ResolverTypeWrapper<Bill>;
  BillProduct: ResolverTypeWrapper<BillProduct>;
  BillStates: BillStates;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  GetOrderInput: GetOrderInput;
  GetRestaurantInput: GetRestaurantInput;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  ListOrderInput: ListOrderInput;
  ListProductInput: ListProductInput;
  ListRestaurantTablesInput: ListRestaurantTablesInput;
  Order: ResolverTypeWrapper<Order>;
  OrderProduct: ResolverTypeWrapper<OrderProduct>;
  OrderStates: OrderStates;
  Product: ResolverTypeWrapper<Product>;
  ProductType: ProductType;
  Query: ResolverTypeWrapper<{}>;
  Restaurant: ResolverTypeWrapper<Restaurant>;
  RestaurantTable: ResolverTypeWrapper<RestaurantTable>;
  RestaurantTableState: RestaurantTableState;
  String: ResolverTypeWrapper<Scalars['String']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Bill: Bill;
  BillProduct: BillProduct;
  Boolean: Scalars['Boolean'];
  GetOrderInput: GetOrderInput;
  GetRestaurantInput: GetRestaurantInput;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  ListOrderInput: ListOrderInput;
  ListProductInput: ListProductInput;
  ListRestaurantTablesInput: ListRestaurantTablesInput;
  Order: Order;
  OrderProduct: OrderProduct;
  Product: Product;
  Query: {};
  Restaurant: Restaurant;
  RestaurantTable: RestaurantTable;
  String: Scalars['String'];
};

export type BillResolvers<ContextType = any, ParentType extends ResolversParentTypes['Bill'] = ResolversParentTypes['Bill']> = {
  billProducts?: Resolver<Maybe<Array<ResolversTypes['BillProduct']>>, ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['BillStates'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BillProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['BillProduct'] = ResolversParentTypes['BillProduct']> = {
  bill?: Resolver<ResolversTypes['Bill'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderResolvers<ContextType = any, ParentType extends ResolversParentTypes['Order'] = ResolversParentTypes['Order']> = {
  bills?: Resolver<Maybe<Array<ResolversTypes['Bill']>>, ParentType, ContextType>;
  orderProducts?: Resolver<Maybe<Array<ResolversTypes['OrderProduct']>>, ParentType, ContextType>;
  restaurant?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['OrderStates'], ParentType, ContextType>;
  totalCost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OrderProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['OrderProduct'] = ResolversParentTypes['OrderProduct']> = {
  order?: Resolver<ResolversTypes['Order'], ParentType, ContextType>;
  product?: Resolver<ResolversTypes['Product'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ProductResolvers<ContextType = any, ParentType extends ResolversParentTypes['Product'] = ResolversParentTypes['Product']> = {
  billProducts?: Resolver<Maybe<Array<ResolversTypes['BillProduct']>>, ParentType, ContextType>;
  cost?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  orderProducts?: Resolver<Maybe<Array<ResolversTypes['OrderProduct']>>, ParentType, ContextType>;
  restaurant?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['ProductType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getOrder?: Resolver<Maybe<ResolversTypes['Order']>, ParentType, ContextType, RequireFields<QueryGetOrderArgs, 'input'>>;
  getRestaurant?: Resolver<Maybe<ResolversTypes['Restaurant']>, ParentType, ContextType, RequireFields<QueryGetRestaurantArgs, 'input'>>;
  listOrder?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType, RequireFields<QueryListOrderArgs, 'input'>>;
  listProduct?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType, RequireFields<QueryListProductArgs, 'input'>>;
  listRestaurantTables?: Resolver<Maybe<Array<ResolversTypes['RestaurantTable']>>, ParentType, ContextType, RequireFields<QueryListRestaurantTablesArgs, 'input'>>;
};

export type RestaurantResolvers<ContextType = any, ParentType extends ResolversParentTypes['Restaurant'] = ResolversParentTypes['Restaurant']> = {
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  orders?: Resolver<Maybe<Array<ResolversTypes['Order']>>, ParentType, ContextType>;
  products?: Resolver<Maybe<Array<ResolversTypes['Product']>>, ParentType, ContextType>;
  tables?: Resolver<Maybe<Array<ResolversTypes['RestaurantTable']>>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RestaurantTableResolvers<ContextType = any, ParentType extends ResolversParentTypes['RestaurantTable'] = ResolversParentTypes['RestaurantTable']> = {
  restaurant?: Resolver<ResolversTypes['Restaurant'], ParentType, ContextType>;
  state?: Resolver<ResolversTypes['RestaurantTableState'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Bill?: BillResolvers<ContextType>;
  BillProduct?: BillProductResolvers<ContextType>;
  Order?: OrderResolvers<ContextType>;
  OrderProduct?: OrderProductResolvers<ContextType>;
  Product?: ProductResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Restaurant?: RestaurantResolvers<ContextType>;
  RestaurantTable?: RestaurantTableResolvers<ContextType>;
};

