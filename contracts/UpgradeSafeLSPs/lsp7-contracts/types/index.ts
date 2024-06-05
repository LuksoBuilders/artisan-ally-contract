import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LSP7CappedSupply
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lsp7CappedSupplyAbi = [
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesEmptyArray' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC725Y_MsgValueDisallowed' },
  {
    type: 'error',
    inputs: [{ name: 'storedData', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidExtensionAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidFunctionSelector',
  },
  { type: 'error', inputs: [], name: 'LSP4TokenNameNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenSymbolNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenTypeNotEditable' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'authorizedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsAuthorizedAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'callIndex', internalType: 'uint256', type: 'uint256' }],
    name: 'LSP7BatchCallFailed',
  },
  { type: 'error', inputs: [], name: 'LSP7CannotSendWithAddressZero' },
  { type: 'error', inputs: [], name: 'LSP7CannotUseAddressZeroAsOperator' },
  { type: 'error', inputs: [], name: 'LSP7CappedSupplyCannotMintOverCap' },
  { type: 'error', inputs: [], name: 'LSP7CappedSupplyRequired' },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7DecreaseAllowanceNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7DecreasedAllowanceBelowZero' },
  { type: 'error', inputs: [], name: 'LSP7InvalidTransferBatch' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverContractMissingLSP1Interface',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverIsEOA',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7RevokeOperatorNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7TokenContractCannotHoldValue' },
  { type: 'error', inputs: [], name: 'LSP7TokenOwnerCannotBeOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'NoExtensionFoundForFunctionSelector',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorAllowanceCannotBeIncreasedFromZero',
  },
  {
    type: 'error',
    inputs: [
      { name: 'callerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableCallerNotTheOwner',
  },
  { type: 'error', inputs: [], name: 'OwnableCannotSetZeroAddressAsOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dataKey',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'dataValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'notified', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'force', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Transfer',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'authorizedAmountFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'batchCalls',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'subtractedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getData',
    outputs: [{ name: 'dataValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getDataBatch',
    outputs: [{ name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'getOperatorsOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'addedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'increaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'notify', internalType: 'bool', type: 'bool' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenSupplyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'force', internalType: 'bool[]', type: 'bool[]' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LSP7CappedSupplyInitAbstract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lsp7CappedSupplyInitAbstractAbi = [
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesEmptyArray' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC725Y_MsgValueDisallowed' },
  {
    type: 'error',
    inputs: [{ name: 'storedData', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidExtensionAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidFunctionSelector',
  },
  { type: 'error', inputs: [], name: 'LSP4TokenNameNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenSymbolNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenTypeNotEditable' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'authorizedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsAuthorizedAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'callIndex', internalType: 'uint256', type: 'uint256' }],
    name: 'LSP7BatchCallFailed',
  },
  { type: 'error', inputs: [], name: 'LSP7CannotSendWithAddressZero' },
  { type: 'error', inputs: [], name: 'LSP7CannotUseAddressZeroAsOperator' },
  { type: 'error', inputs: [], name: 'LSP7CappedSupplyCannotMintOverCap' },
  { type: 'error', inputs: [], name: 'LSP7CappedSupplyRequired' },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7DecreaseAllowanceNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7DecreasedAllowanceBelowZero' },
  { type: 'error', inputs: [], name: 'LSP7InvalidTransferBatch' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverContractMissingLSP1Interface',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverIsEOA',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7RevokeOperatorNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7TokenContractCannotHoldValue' },
  { type: 'error', inputs: [], name: 'LSP7TokenOwnerCannotBeOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'NoExtensionFoundForFunctionSelector',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorAllowanceCannotBeIncreasedFromZero',
  },
  {
    type: 'error',
    inputs: [
      { name: 'callerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableCallerNotTheOwner',
  },
  { type: 'error', inputs: [], name: 'OwnableCannotSetZeroAddressAsOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dataKey',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'dataValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'notified', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'force', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Transfer',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'authorizedAmountFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'batchCalls',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'subtractedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getData',
    outputs: [{ name: 'dataValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getDataBatch',
    outputs: [{ name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'getOperatorsOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'addedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'increaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'notify', internalType: 'bool', type: 'bool' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'tokenSupplyCap',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'force', internalType: 'bool[]', type: 'bool[]' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LSP7DigitalAsset
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lsp7DigitalAssetAbi = [
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesEmptyArray' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC725Y_MsgValueDisallowed' },
  {
    type: 'error',
    inputs: [{ name: 'storedData', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidExtensionAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidFunctionSelector',
  },
  { type: 'error', inputs: [], name: 'LSP4TokenNameNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenSymbolNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenTypeNotEditable' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'authorizedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsAuthorizedAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'callIndex', internalType: 'uint256', type: 'uint256' }],
    name: 'LSP7BatchCallFailed',
  },
  { type: 'error', inputs: [], name: 'LSP7CannotSendWithAddressZero' },
  { type: 'error', inputs: [], name: 'LSP7CannotUseAddressZeroAsOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7DecreaseAllowanceNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7DecreasedAllowanceBelowZero' },
  { type: 'error', inputs: [], name: 'LSP7InvalidTransferBatch' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverContractMissingLSP1Interface',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverIsEOA',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7RevokeOperatorNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7TokenContractCannotHoldValue' },
  { type: 'error', inputs: [], name: 'LSP7TokenOwnerCannotBeOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'NoExtensionFoundForFunctionSelector',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorAllowanceCannotBeIncreasedFromZero',
  },
  {
    type: 'error',
    inputs: [
      { name: 'callerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableCallerNotTheOwner',
  },
  { type: 'error', inputs: [], name: 'OwnableCannotSetZeroAddressAsOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dataKey',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'dataValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'notified', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'force', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Transfer',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'authorizedAmountFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'batchCalls',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'subtractedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getData',
    outputs: [{ name: 'dataValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getDataBatch',
    outputs: [{ name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'getOperatorsOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'addedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'increaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'notify', internalType: 'bool', type: 'bool' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'force', internalType: 'bool[]', type: 'bool[]' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LSP7DigitalAssetInitAbstract
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lsp7DigitalAssetInitAbstractAbi = [
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesEmptyArray' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC725Y_MsgValueDisallowed' },
  {
    type: 'error',
    inputs: [{ name: 'storedData', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidExtensionAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidFunctionSelector',
  },
  { type: 'error', inputs: [], name: 'LSP4TokenNameNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenSymbolNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenTypeNotEditable' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'authorizedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsAuthorizedAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'callIndex', internalType: 'uint256', type: 'uint256' }],
    name: 'LSP7BatchCallFailed',
  },
  { type: 'error', inputs: [], name: 'LSP7CannotSendWithAddressZero' },
  { type: 'error', inputs: [], name: 'LSP7CannotUseAddressZeroAsOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7DecreaseAllowanceNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7DecreasedAllowanceBelowZero' },
  { type: 'error', inputs: [], name: 'LSP7InvalidTransferBatch' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverContractMissingLSP1Interface',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverIsEOA',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7RevokeOperatorNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7TokenContractCannotHoldValue' },
  { type: 'error', inputs: [], name: 'LSP7TokenOwnerCannotBeOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'NoExtensionFoundForFunctionSelector',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorAllowanceCannotBeIncreasedFromZero',
  },
  {
    type: 'error',
    inputs: [
      { name: 'callerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableCallerNotTheOwner',
  },
  { type: 'error', inputs: [], name: 'OwnableCannotSetZeroAddressAsOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dataKey',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'dataValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'notified', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'force', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Transfer',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'authorizedAmountFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'batchCalls',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'subtractedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getData',
    outputs: [{ name: 'dataValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getDataBatch',
    outputs: [{ name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'getOperatorsOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'addedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'increaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'notify', internalType: 'bool', type: 'bool' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'force', internalType: 'bool[]', type: 'bool[]' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LSP7Mintable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lsp7MintableAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'newOwner_', internalType: 'address', type: 'address' },
      { name: 'lsp4TokenType_', internalType: 'uint256', type: 'uint256' },
      { name: 'isNonDivisible_', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesEmptyArray' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC725Y_MsgValueDisallowed' },
  {
    type: 'error',
    inputs: [{ name: 'storedData', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidExtensionAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidFunctionSelector',
  },
  { type: 'error', inputs: [], name: 'LSP4TokenNameNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenSymbolNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenTypeNotEditable' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'authorizedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsAuthorizedAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'callIndex', internalType: 'uint256', type: 'uint256' }],
    name: 'LSP7BatchCallFailed',
  },
  { type: 'error', inputs: [], name: 'LSP7CannotSendWithAddressZero' },
  { type: 'error', inputs: [], name: 'LSP7CannotUseAddressZeroAsOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7DecreaseAllowanceNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7DecreasedAllowanceBelowZero' },
  { type: 'error', inputs: [], name: 'LSP7InvalidTransferBatch' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverContractMissingLSP1Interface',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverIsEOA',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7RevokeOperatorNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7TokenContractCannotHoldValue' },
  { type: 'error', inputs: [], name: 'LSP7TokenOwnerCannotBeOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'NoExtensionFoundForFunctionSelector',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorAllowanceCannotBeIncreasedFromZero',
  },
  {
    type: 'error',
    inputs: [
      { name: 'callerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableCallerNotTheOwner',
  },
  { type: 'error', inputs: [], name: 'OwnableCannotSetZeroAddressAsOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dataKey',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'dataValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'notified', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'force', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Transfer',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'authorizedAmountFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'batchCalls',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'subtractedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getData',
    outputs: [{ name: 'dataValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getDataBatch',
    outputs: [{ name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'getOperatorsOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'addedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'increaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'notify', internalType: 'bool', type: 'bool' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'force', internalType: 'bool[]', type: 'bool[]' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// LSP7MintableInit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const lsp7MintableInitAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesEmptyArray' },
  { type: 'error', inputs: [], name: 'ERC725Y_DataKeysValuesLengthMismatch' },
  { type: 'error', inputs: [], name: 'ERC725Y_MsgValueDisallowed' },
  {
    type: 'error',
    inputs: [{ name: 'storedData', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidExtensionAddress',
  },
  {
    type: 'error',
    inputs: [{ name: 'data', internalType: 'bytes', type: 'bytes' }],
    name: 'InvalidFunctionSelector',
  },
  { type: 'error', inputs: [], name: 'LSP4TokenNameNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenSymbolNotEditable' },
  { type: 'error', inputs: [], name: 'LSP4TokenTypeNotEditable' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'authorizedAmount', internalType: 'uint256', type: 'uint256' },
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsAuthorizedAmount',
  },
  {
    type: 'error',
    inputs: [
      { name: 'balance', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'LSP7AmountExceedsBalance',
  },
  {
    type: 'error',
    inputs: [{ name: 'callIndex', internalType: 'uint256', type: 'uint256' }],
    name: 'LSP7BatchCallFailed',
  },
  { type: 'error', inputs: [], name: 'LSP7CannotSendWithAddressZero' },
  { type: 'error', inputs: [], name: 'LSP7CannotUseAddressZeroAsOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7DecreaseAllowanceNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7DecreasedAllowanceBelowZero' },
  { type: 'error', inputs: [], name: 'LSP7InvalidTransferBatch' },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverContractMissingLSP1Interface',
  },
  {
    type: 'error',
    inputs: [
      { name: 'tokenReceiver', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7NotifyTokenReceiverIsEOA',
  },
  {
    type: 'error',
    inputs: [
      { name: 'caller', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'LSP7RevokeOperatorNotAuthorized',
  },
  { type: 'error', inputs: [], name: 'LSP7TokenContractCannotHoldValue' },
  { type: 'error', inputs: [], name: 'LSP7TokenOwnerCannotBeOperator' },
  {
    type: 'error',
    inputs: [
      { name: 'functionSelector', internalType: 'bytes4', type: 'bytes4' },
    ],
    name: 'NoExtensionFoundForFunctionSelector',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'OperatorAllowanceCannotBeIncreasedFromZero',
  },
  {
    type: 'error',
    inputs: [
      { name: 'callerAddress', internalType: 'address', type: 'address' },
    ],
    name: 'OwnableCallerNotTheOwner',
  },
  { type: 'error', inputs: [], name: 'OwnableCannotSetZeroAddressAsOwner' },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dataKey',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
      {
        name: 'dataValue',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'DataChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'version', internalType: 'uint8', type: 'uint8', indexed: false },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorAuthorizationChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'notified', internalType: 'bool', type: 'bool', indexed: true },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
        indexed: false,
      },
    ],
    name: 'OperatorRevoked',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      { name: 'force', internalType: 'bool', type: 'bool', indexed: false },
      { name: 'data', internalType: 'bytes', type: 'bytes', indexed: false },
    ],
    name: 'Transfer',
  },
  { type: 'fallback', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'authorizeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
    ],
    name: 'authorizedAmountFor',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'data', internalType: 'bytes[]', type: 'bytes[]' }],
    name: 'batchCalls',
    outputs: [{ name: 'results', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'decimals',
    outputs: [{ name: '', internalType: 'uint8', type: 'uint8' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'subtractedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'decreaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'dataKey', internalType: 'bytes32', type: 'bytes32' }],
    name: 'getData',
    outputs: [{ name: 'dataValue', internalType: 'bytes', type: 'bytes' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
    ],
    name: 'getDataBatch',
    outputs: [{ name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenOwner', internalType: 'address', type: 'address' }],
    name: 'getOperatorsOf',
    outputs: [{ name: '', internalType: 'address[]', type: 'address[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'addedAmount', internalType: 'uint256', type: 'uint256' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'increaseAllowance',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'name_', internalType: 'string', type: 'string' },
      { name: 'symbol_', internalType: 'string', type: 'string' },
      { name: 'newOwner_', internalType: 'address', type: 'address' },
      { name: 'lsp4TokenType_', internalType: 'uint256', type: 'uint256' },
      { name: 'isNonDivisible_', internalType: 'bool', type: 'bool' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'mint',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenOwner', internalType: 'address', type: 'address' },
      { name: 'notify', internalType: 'bool', type: 'bool' },
      {
        name: 'operatorNotificationData',
        internalType: 'bytes',
        type: 'bytes',
      },
    ],
    name: 'revokeOperator',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKey', internalType: 'bytes32', type: 'bytes32' },
      { name: 'dataValue', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'setData',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'dataKeys', internalType: 'bytes32[]', type: 'bytes32[]' },
      { name: 'dataValues', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'setDataBatch',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'force', internalType: 'bool', type: 'bool' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'transfer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address[]', type: 'address[]' },
      { name: 'to', internalType: 'address[]', type: 'address[]' },
      { name: 'amount', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'force', internalType: 'bool[]', type: 'bool[]' },
      { name: 'data', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    name: 'transferBatch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__
 */
export const useReadLsp7CappedSupply = /*#__PURE__*/ createUseReadContract({
  abi: lsp7CappedSupplyAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"authorizedAmountFor"`
 */
export const useReadLsp7CappedSupplyAuthorizedAmountFor =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'authorizedAmountFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLsp7CappedSupplyBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLsp7CappedSupplyDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"getData"`
 */
export const useReadLsp7CappedSupplyGetData =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'getData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"getDataBatch"`
 */
export const useReadLsp7CappedSupplyGetDataBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'getDataBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"getOperatorsOf"`
 */
export const useReadLsp7CappedSupplyGetOperatorsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'getOperatorsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLsp7CappedSupplyOwner = /*#__PURE__*/ createUseReadContract(
  { abi: lsp7CappedSupplyAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLsp7CappedSupplySupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"tokenSupplyCap"`
 */
export const useReadLsp7CappedSupplyTokenSupplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'tokenSupplyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLsp7CappedSupplyTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__
 */
export const useWriteLsp7CappedSupply = /*#__PURE__*/ createUseWriteContract({
  abi: lsp7CappedSupplyAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteLsp7CappedSupplyAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useWriteLsp7CappedSupplyBatchCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLsp7CappedSupplyDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLsp7CappedSupplyIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLsp7CappedSupplyRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteLsp7CappedSupplyRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteLsp7CappedSupplySetData =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useWriteLsp7CappedSupplySetDataBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLsp7CappedSupplyTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useWriteLsp7CappedSupplyTransferBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLsp7CappedSupplyTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__
 */
export const useSimulateLsp7CappedSupply =
  /*#__PURE__*/ createUseSimulateContract({ abi: lsp7CappedSupplyAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateLsp7CappedSupplyAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useSimulateLsp7CappedSupplyBatchCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLsp7CappedSupplyDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLsp7CappedSupplyIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLsp7CappedSupplyRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateLsp7CappedSupplyRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateLsp7CappedSupplySetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useSimulateLsp7CappedSupplySetDataBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLsp7CappedSupplyTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useSimulateLsp7CappedSupplyTransferBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLsp7CappedSupplyTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__
 */
export const useWatchLsp7CappedSupplyEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: lsp7CappedSupplyAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `eventName` set to `"DataChanged"`
 */
export const useWatchLsp7CappedSupplyDataChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyAbi,
    eventName: 'DataChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `eventName` set to `"OperatorAuthorizationChanged"`
 */
export const useWatchLsp7CappedSupplyOperatorAuthorizationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyAbi,
    eventName: 'OperatorAuthorizationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `eventName` set to `"OperatorRevoked"`
 */
export const useWatchLsp7CappedSupplyOperatorRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyAbi,
    eventName: 'OperatorRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLsp7CappedSupplyOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLsp7CappedSupplyTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__
 */
export const useReadLsp7CappedSupplyInitAbstract =
  /*#__PURE__*/ createUseReadContract({ abi: lsp7CappedSupplyInitAbstractAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"authorizedAmountFor"`
 */
export const useReadLsp7CappedSupplyInitAbstractAuthorizedAmountFor =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'authorizedAmountFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLsp7CappedSupplyInitAbstractBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLsp7CappedSupplyInitAbstractDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"getData"`
 */
export const useReadLsp7CappedSupplyInitAbstractGetData =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'getData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"getDataBatch"`
 */
export const useReadLsp7CappedSupplyInitAbstractGetDataBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'getDataBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"getOperatorsOf"`
 */
export const useReadLsp7CappedSupplyInitAbstractGetOperatorsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'getOperatorsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLsp7CappedSupplyInitAbstractOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLsp7CappedSupplyInitAbstractSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"tokenSupplyCap"`
 */
export const useReadLsp7CappedSupplyInitAbstractTokenSupplyCap =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'tokenSupplyCap',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLsp7CappedSupplyInitAbstractTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__
 */
export const useWriteLsp7CappedSupplyInitAbstract =
  /*#__PURE__*/ createUseWriteContract({ abi: lsp7CappedSupplyInitAbstractAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteLsp7CappedSupplyInitAbstractAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useWriteLsp7CappedSupplyInitAbstractBatchCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLsp7CappedSupplyInitAbstractDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLsp7CappedSupplyInitAbstractIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLsp7CappedSupplyInitAbstractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteLsp7CappedSupplyInitAbstractRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteLsp7CappedSupplyInitAbstractSetData =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useWriteLsp7CappedSupplyInitAbstractSetDataBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLsp7CappedSupplyInitAbstractTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useWriteLsp7CappedSupplyInitAbstractTransferBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLsp7CappedSupplyInitAbstractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__
 */
export const useSimulateLsp7CappedSupplyInitAbstract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractBatchCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractSetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractSetDataBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractTransferBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLsp7CappedSupplyInitAbstractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7CappedSupplyInitAbstractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__
 */
export const useWatchLsp7CappedSupplyInitAbstractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `eventName` set to `"DataChanged"`
 */
export const useWatchLsp7CappedSupplyInitAbstractDataChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
    eventName: 'DataChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchLsp7CappedSupplyInitAbstractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `eventName` set to `"OperatorAuthorizationChanged"`
 */
export const useWatchLsp7CappedSupplyInitAbstractOperatorAuthorizationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
    eventName: 'OperatorAuthorizationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `eventName` set to `"OperatorRevoked"`
 */
export const useWatchLsp7CappedSupplyInitAbstractOperatorRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
    eventName: 'OperatorRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLsp7CappedSupplyInitAbstractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7CappedSupplyInitAbstractAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLsp7CappedSupplyInitAbstractTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7CappedSupplyInitAbstractAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__
 */
export const useReadLsp7DigitalAsset = /*#__PURE__*/ createUseReadContract({
  abi: lsp7DigitalAssetAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"authorizedAmountFor"`
 */
export const useReadLsp7DigitalAssetAuthorizedAmountFor =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'authorizedAmountFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLsp7DigitalAssetBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLsp7DigitalAssetDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"getData"`
 */
export const useReadLsp7DigitalAssetGetData =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'getData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"getDataBatch"`
 */
export const useReadLsp7DigitalAssetGetDataBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'getDataBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"getOperatorsOf"`
 */
export const useReadLsp7DigitalAssetGetOperatorsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'getOperatorsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLsp7DigitalAssetOwner = /*#__PURE__*/ createUseReadContract(
  { abi: lsp7DigitalAssetAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLsp7DigitalAssetSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLsp7DigitalAssetTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__
 */
export const useWriteLsp7DigitalAsset = /*#__PURE__*/ createUseWriteContract({
  abi: lsp7DigitalAssetAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteLsp7DigitalAssetAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useWriteLsp7DigitalAssetBatchCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLsp7DigitalAssetDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLsp7DigitalAssetIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLsp7DigitalAssetRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteLsp7DigitalAssetRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteLsp7DigitalAssetSetData =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useWriteLsp7DigitalAssetSetDataBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLsp7DigitalAssetTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useWriteLsp7DigitalAssetTransferBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLsp7DigitalAssetTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__
 */
export const useSimulateLsp7DigitalAsset =
  /*#__PURE__*/ createUseSimulateContract({ abi: lsp7DigitalAssetAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateLsp7DigitalAssetAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useSimulateLsp7DigitalAssetBatchCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLsp7DigitalAssetDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLsp7DigitalAssetIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLsp7DigitalAssetRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateLsp7DigitalAssetRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateLsp7DigitalAssetSetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useSimulateLsp7DigitalAssetSetDataBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLsp7DigitalAssetTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useSimulateLsp7DigitalAssetTransferBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLsp7DigitalAssetTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__
 */
export const useWatchLsp7DigitalAssetEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: lsp7DigitalAssetAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `eventName` set to `"DataChanged"`
 */
export const useWatchLsp7DigitalAssetDataChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetAbi,
    eventName: 'DataChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `eventName` set to `"OperatorAuthorizationChanged"`
 */
export const useWatchLsp7DigitalAssetOperatorAuthorizationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetAbi,
    eventName: 'OperatorAuthorizationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `eventName` set to `"OperatorRevoked"`
 */
export const useWatchLsp7DigitalAssetOperatorRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetAbi,
    eventName: 'OperatorRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLsp7DigitalAssetOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLsp7DigitalAssetTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__
 */
export const useReadLsp7DigitalAssetInitAbstract =
  /*#__PURE__*/ createUseReadContract({ abi: lsp7DigitalAssetInitAbstractAbi })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"authorizedAmountFor"`
 */
export const useReadLsp7DigitalAssetInitAbstractAuthorizedAmountFor =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'authorizedAmountFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLsp7DigitalAssetInitAbstractBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLsp7DigitalAssetInitAbstractDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"getData"`
 */
export const useReadLsp7DigitalAssetInitAbstractGetData =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'getData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"getDataBatch"`
 */
export const useReadLsp7DigitalAssetInitAbstractGetDataBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'getDataBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"getOperatorsOf"`
 */
export const useReadLsp7DigitalAssetInitAbstractGetOperatorsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'getOperatorsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLsp7DigitalAssetInitAbstractOwner =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'owner',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLsp7DigitalAssetInitAbstractSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLsp7DigitalAssetInitAbstractTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__
 */
export const useWriteLsp7DigitalAssetInitAbstract =
  /*#__PURE__*/ createUseWriteContract({ abi: lsp7DigitalAssetInitAbstractAbi })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteLsp7DigitalAssetInitAbstractAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useWriteLsp7DigitalAssetInitAbstractBatchCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLsp7DigitalAssetInitAbstractDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLsp7DigitalAssetInitAbstractIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLsp7DigitalAssetInitAbstractRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteLsp7DigitalAssetInitAbstractRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteLsp7DigitalAssetInitAbstractSetData =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useWriteLsp7DigitalAssetInitAbstractSetDataBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLsp7DigitalAssetInitAbstractTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useWriteLsp7DigitalAssetInitAbstractTransferBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLsp7DigitalAssetInitAbstractTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__
 */
export const useSimulateLsp7DigitalAssetInitAbstract =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractBatchCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractSetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractSetDataBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractTransferBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLsp7DigitalAssetInitAbstractTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7DigitalAssetInitAbstractAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__
 */
export const useWatchLsp7DigitalAssetInitAbstractEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `eventName` set to `"DataChanged"`
 */
export const useWatchLsp7DigitalAssetInitAbstractDataChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
    eventName: 'DataChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchLsp7DigitalAssetInitAbstractInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `eventName` set to `"OperatorAuthorizationChanged"`
 */
export const useWatchLsp7DigitalAssetInitAbstractOperatorAuthorizationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
    eventName: 'OperatorAuthorizationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `eventName` set to `"OperatorRevoked"`
 */
export const useWatchLsp7DigitalAssetInitAbstractOperatorRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
    eventName: 'OperatorRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLsp7DigitalAssetInitAbstractOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7DigitalAssetInitAbstractAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLsp7DigitalAssetInitAbstractTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7DigitalAssetInitAbstractAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__
 */
export const useReadLsp7Mintable = /*#__PURE__*/ createUseReadContract({
  abi: lsp7MintableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"authorizedAmountFor"`
 */
export const useReadLsp7MintableAuthorizedAmountFor =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableAbi,
    functionName: 'authorizedAmountFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLsp7MintableBalanceOf = /*#__PURE__*/ createUseReadContract(
  { abi: lsp7MintableAbi, functionName: 'balanceOf' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLsp7MintableDecimals = /*#__PURE__*/ createUseReadContract({
  abi: lsp7MintableAbi,
  functionName: 'decimals',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"getData"`
 */
export const useReadLsp7MintableGetData = /*#__PURE__*/ createUseReadContract({
  abi: lsp7MintableAbi,
  functionName: 'getData',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"getDataBatch"`
 */
export const useReadLsp7MintableGetDataBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableAbi,
    functionName: 'getDataBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"getOperatorsOf"`
 */
export const useReadLsp7MintableGetOperatorsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableAbi,
    functionName: 'getOperatorsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLsp7MintableOwner = /*#__PURE__*/ createUseReadContract({
  abi: lsp7MintableAbi,
  functionName: 'owner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLsp7MintableSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLsp7MintableTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__
 */
export const useWriteLsp7Mintable = /*#__PURE__*/ createUseWriteContract({
  abi: lsp7MintableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteLsp7MintableAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useWriteLsp7MintableBatchCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLsp7MintableDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLsp7MintableIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteLsp7MintableMint = /*#__PURE__*/ createUseWriteContract({
  abi: lsp7MintableAbi,
  functionName: 'mint',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLsp7MintableRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteLsp7MintableRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteLsp7MintableSetData = /*#__PURE__*/ createUseWriteContract(
  { abi: lsp7MintableAbi, functionName: 'setData' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useWriteLsp7MintableSetDataBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLsp7MintableTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useWriteLsp7MintableTransferBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLsp7MintableTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__
 */
export const useSimulateLsp7Mintable = /*#__PURE__*/ createUseSimulateContract({
  abi: lsp7MintableAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateLsp7MintableAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useSimulateLsp7MintableBatchCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLsp7MintableDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLsp7MintableIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateLsp7MintableMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLsp7MintableRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateLsp7MintableRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateLsp7MintableSetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useSimulateLsp7MintableSetDataBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLsp7MintableTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useSimulateLsp7MintableTransferBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLsp7MintableTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableAbi}__
 */
export const useWatchLsp7MintableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: lsp7MintableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableAbi}__ and `eventName` set to `"DataChanged"`
 */
export const useWatchLsp7MintableDataChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableAbi,
    eventName: 'DataChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableAbi}__ and `eventName` set to `"OperatorAuthorizationChanged"`
 */
export const useWatchLsp7MintableOperatorAuthorizationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableAbi,
    eventName: 'OperatorAuthorizationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableAbi}__ and `eventName` set to `"OperatorRevoked"`
 */
export const useWatchLsp7MintableOperatorRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableAbi,
    eventName: 'OperatorRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLsp7MintableOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLsp7MintableTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__
 */
export const useReadLsp7MintableInit = /*#__PURE__*/ createUseReadContract({
  abi: lsp7MintableInitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"authorizedAmountFor"`
 */
export const useReadLsp7MintableInitAuthorizedAmountFor =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'authorizedAmountFor',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadLsp7MintableInitBalanceOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'balanceOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"decimals"`
 */
export const useReadLsp7MintableInitDecimals =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'decimals',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"getData"`
 */
export const useReadLsp7MintableInitGetData =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'getData',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"getDataBatch"`
 */
export const useReadLsp7MintableInitGetDataBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'getDataBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"getOperatorsOf"`
 */
export const useReadLsp7MintableInitGetOperatorsOf =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'getOperatorsOf',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"owner"`
 */
export const useReadLsp7MintableInitOwner = /*#__PURE__*/ createUseReadContract(
  { abi: lsp7MintableInitAbi, functionName: 'owner' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadLsp7MintableInitSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadLsp7MintableInitTotalSupply =
  /*#__PURE__*/ createUseReadContract({
    abi: lsp7MintableInitAbi,
    functionName: 'totalSupply',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__
 */
export const useWriteLsp7MintableInit = /*#__PURE__*/ createUseWriteContract({
  abi: lsp7MintableInitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useWriteLsp7MintableInitAuthorizeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useWriteLsp7MintableInitBatchCalls =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useWriteLsp7MintableInitDecreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useWriteLsp7MintableInitIncreaseAllowance =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteLsp7MintableInitInitialize =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"mint"`
 */
export const useWriteLsp7MintableInitMint =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useWriteLsp7MintableInitRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useWriteLsp7MintableInitRevokeOperator =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"setData"`
 */
export const useWriteLsp7MintableInitSetData =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useWriteLsp7MintableInitSetDataBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteLsp7MintableInitTransfer =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useWriteLsp7MintableInitTransferBatch =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useWriteLsp7MintableInitTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: lsp7MintableInitAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__
 */
export const useSimulateLsp7MintableInit =
  /*#__PURE__*/ createUseSimulateContract({ abi: lsp7MintableInitAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"authorizeOperator"`
 */
export const useSimulateLsp7MintableInitAuthorizeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'authorizeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"batchCalls"`
 */
export const useSimulateLsp7MintableInitBatchCalls =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'batchCalls',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"decreaseAllowance"`
 */
export const useSimulateLsp7MintableInitDecreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'decreaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"increaseAllowance"`
 */
export const useSimulateLsp7MintableInitIncreaseAllowance =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'increaseAllowance',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateLsp7MintableInitInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"mint"`
 */
export const useSimulateLsp7MintableInitMint =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'mint',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"renounceOwnership"`
 */
export const useSimulateLsp7MintableInitRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'renounceOwnership',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"revokeOperator"`
 */
export const useSimulateLsp7MintableInitRevokeOperator =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'revokeOperator',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"setData"`
 */
export const useSimulateLsp7MintableInitSetData =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'setData',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"setDataBatch"`
 */
export const useSimulateLsp7MintableInitSetDataBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'setDataBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateLsp7MintableInitTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"transferBatch"`
 */
export const useSimulateLsp7MintableInitTransferBatch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'transferBatch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `functionName` set to `"transferOwnership"`
 */
export const useSimulateLsp7MintableInitTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: lsp7MintableInitAbi,
    functionName: 'transferOwnership',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__
 */
export const useWatchLsp7MintableInitEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: lsp7MintableInitAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `eventName` set to `"DataChanged"`
 */
export const useWatchLsp7MintableInitDataChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableInitAbi,
    eventName: 'DataChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchLsp7MintableInitInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableInitAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `eventName` set to `"OperatorAuthorizationChanged"`
 */
export const useWatchLsp7MintableInitOperatorAuthorizationChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableInitAbi,
    eventName: 'OperatorAuthorizationChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `eventName` set to `"OperatorRevoked"`
 */
export const useWatchLsp7MintableInitOperatorRevokedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableInitAbi,
    eventName: 'OperatorRevoked',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `eventName` set to `"OwnershipTransferred"`
 */
export const useWatchLsp7MintableInitOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableInitAbi,
    eventName: 'OwnershipTransferred',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link lsp7MintableInitAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchLsp7MintableInitTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: lsp7MintableInitAbi,
    eventName: 'Transfer',
  })
