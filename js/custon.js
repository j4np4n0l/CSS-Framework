import * as ecomAdditionalFees from 'interfaces-ecommerce-v1-additional-fees-provider';
import wixSiteBackend from 'wix-site-backend';

/**
 * This endpoint retrieves additional fees calculated by your app.
 *
 * Wix calls this endpoint when certain actions are performed on the cart or checkout.
 * For example, when an item is added to the cart or the amount of an item is updated in the checkout.
 *
 * > __Notes:__
 * > + The currency returned in the response object must match the wix site's currency or those fees will be filtered out and not returned. Extract the `currency` from the [request envelope](https://dev.wix.com/api/rest/getting-started/service-provider-interface#getting-started_service-provider-interface_request-envelope) to ensure the correct currency is used in your calculation.
 * > + You cannot try out this endpoint because it has to be implemented by an app and can have an arbitrary URL. Therefore, ignore the **Authorization** and **POST** sections below as well as the **Try It Out** button.
 * @param {import('interfaces-ecommerce-v1-additional-fees-provider').CalculateAdditionalFeesOptions} options
 * @param {import('interfaces-ecommerce-v1-additional-fees-provider').Context} context
 * @returns {Promise<import('interfaces-ecommerce-v1-additional-fees-provider').CalculateAdditionalFeesResponse | import('interfaces-ecommerce-v1-additional-fees-provider').BusinessError>}
 */
//export const calculateAdditionalFees = async (options, context) => {};
export const calculateAdditionalFees = async (options) => {

  let additionalFees = [];
  const currency = await wixSiteBackend.generalInfo.getPaymentCurrency();

  options.lineItems.forEach((item) => {

  	if (item.physicalProperties.sku == "NYL0000001") {
		additionalFees.push({
			code: 'convenience-fee',
			name: 'Convenience Fee',
			price: '9',
			taxDetails: {
				taxable: false
			}
		});
  	}

  });

  return {
    currency,
    additionalFees
  };

};
